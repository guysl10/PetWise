import json
import requests
from bs4 import BeautifulSoup
from firebase import petwise_serv


# from loguru import logger


class Yad4PetsCrawler:
    """
    Scan for pets in given sites from config file.

    :ivar urls: all urls to scan for pets.
    """

    def __init__(self):
        with open("./crawler/config.json", "rb") as f:
            data = json.load(f)
            self.urls = data

    def scan_by_id(
            self, site_name: str,
            start_id: int, end_id: int,
            no_relevant_str: str
    ):
        pets = {}
        for i in range(start_id, end_id):
            # logger.info(f"Scanning {site_name + str(i)}")
            print(f"Scanning {site_name + str(i)}")
            response = requests.get(site_name + str(i))
            data = response.content.decode("utf-8")
            if data.find(no_relevant_str) == -1:
                pets[i] = self.extract_info(data)
                pets[i]["url"] = site_name + str(i)

        return pets

    @staticmethod
    def get_last_id(site):
        count = 0
        response = requests.get(site)
        data = response.content.decode("utf-8")
        parser = BeautifulSoup(data)
        counters = parser.find_all("ul", attrs="list-inline yd-head-count")
        for counter in counters:
            if counter.find_all("span")[0].text.find("באתר") != -1:
                count = counter.find_all("li", "yd-head-num")[0].text.split(
                    ',')
                count = int("".join(count))
                return count - 1

    @staticmethod
    def extract_info(html_data):
        # TODO: extract images of the pet.
        parser = BeautifulSoup(html_data)
        bs_data = parser.find_all(
            'table',
            attrs={'class': 'table'}
        )
        description = parser.find(
            'div',
            attrs={'class': 'dog-description'}
        )
        all_images = parser.find_all(
            'div',
            attrs={'class': 'carousel-inner'}
        )[0].find_all("img")
        images = [img["src"] for img in all_images]

        pet_data = {}
        for table in bs_data:
            pet_data.update(Yad4PetsCrawler.extract_table(table))
        pet_data["images"] = images
        pet_data["description"] = description.text

        return pet_data

    @staticmethod
    def extract_table(table):
        pet_data = {}
        data_title = ""
        for line in table.find_all("tr"):
            for index, row in enumerate(line.find_all("td")):
                if index % 2 == 0:
                    data_title = row.text
                else:
                    pet_data[data_title] = row.text

        return pet_data

    def launch(self):
        pets = {}
        for site in self.urls:
            # TODO: check from db the last id stored
            end_scan = self.get_last_id(self.urls[site]['url'] + "1")
            if end_scan != self.urls[site]["last_id_scanned"]:
                pets.update(
                    {site: self.scan_by_id(
                        self.urls[site]['url'],
                        self.urls[site]["last_id_scanned"] + 1,
                        end_scan,
                        self.urls[site]["ignore_sign"]
                    )}
                )
                self.urls[site]["last_id_scanned"] = end_scan

        self.upload_to_firestore(u'pets', pets)

        # self.update_config_file()

    @staticmethod
    def upload_to_firestore(collection_name, pets):
        pets_db = petwise_serv.firestore_client.collection(collection_name)
        for result in pets:
            for pet_id in pets[result]:
                # logger.info(f"uploading to firestore {result} {pet_id}")
                print(f"uploading to firestore {result} {pet_id}")
                pets_db.add(pets[result][pet_id])

    # def update_config_file(self):
    #     with open("./crawler/config.json", "wb") as f:
    #         json.dump(self.urls, f)


def main():
    a = Yad4PetsCrawler()
    a.launch()


if __name__ == '__main__':
    main()
