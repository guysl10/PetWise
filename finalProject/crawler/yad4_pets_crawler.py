import json
from typing import Dict
from bs4 import BeautifulSoup
from loguru import logger

from crawler.utils import _safe_get_requests, _log_wrapper, log_configure, \
    upload_logs
from firebase import petwise_serv


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
            ignore_sign: str
    ) -> Dict[str, str]:
        """
        According to start & end id, extract from site all puppies data.

        :param site_name: Base url for requests.
        :param start_id: Start range for scanning.
        :param end_id: End range for scanning.
        :param ignore_sign: If this sign found inside get request, skip to
        next id.

        :return: All pets found inside the site between given id's.
        """
        pets = {}
        new_pets_count = 0
        logger.info(
            f"Scanning {end_id - start_id + 1} id's from {start_id} - {end_id}"
        )
        for i in range(start_id, end_id):
            logger.info(f"Scanning {site_name + str(i)}")
            response = _safe_get_requests(site_name + str(i))
            if response is not None:
                data = response.content.decode("utf-8")
                if data.find(ignore_sign) == -1:
                    new_pets_count += 1
                    pets[i] = self.extract_info(data)
                    pets[i]["url"] = site_name + str(i)
        logger.info(f"Found {new_pets_count}/{end_id - start_id + 1} new pets")
        return pets

    @staticmethod
    def get_last_id(site: str) -> int:
        """
        Extract from site the last puppy inserted to site.

        :param site: the url for the get request.

        :return: the newest puppy id.
        """
        response = _safe_get_requests(site)
        if response is not None:
            data = response.content.decode("utf-8")
            parser = BeautifulSoup(data, "html.parser")
            counters = parser.find_all("ul", attrs="list-inline yd-head-count")
            for counter in counters:
                if counter.find_all("span")[0].text.find("כלבים באתר") != -1:
                    count = counter.find_all("li", "yd-head-num")[
                        0].text.split(
                        ',')
                    count = int("".join(count))
                    return count - 1

    @staticmethod
    def extract_info(html_data: str) -> Dict[str, str]:
        """
        Extract all info about puppi from given html info page about puppy.

        :param html_data: html response to extract data from.

        :return:
        """
        parser = BeautifulSoup(html_data, "html.parser")
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
    def extract_table(table) -> Dict[str, str]:
        """
        Take all data from given bs4 table about puppy.

        :param table: Html table in bs4 format to extract info from.

        :return: All data from given table after serialization.
        """
        pet_table = {}
        data_title = ""
        for line in table.find_all("tr"):
            for index, row in enumerate(line.find_all("td")):
                if index % 2 == 0:
                    data_title = row.text
                else:
                    pet_table[data_title] = row.text

        return pet_table

    def launch(self):
        """Go over all urls and extract all new puppies from all sites."""
        pets = {}
        for site in self.urls:
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

        self.upload_to_pets_firestore(u'pets', pets)


    @staticmethod
    @_log_wrapper
    def upload_to_pets_firestore(
            collection_name: str, pets: Dict[str, Dict[str, str]]
    ):
        """
        Connect to firestore inside firebase and upload all new puppies found.

        :param collection_name: table name to upload all data to.
        :param pets: All puppies data to upload to firestore.
        """
        pets_db = petwise_serv.firestore_client.collection(collection_name)
        for result in pets:
            for pet_id in pets[result]:
                logger.info(f"uploading to firestore {result} {pet_id}")
                pets_db.add(pets[result][pet_id])

    def update_config_file(self):
        with open("./crawler/config.json", "w") as f:
            json.dump(self.urls, f)


@logger.catch
def main():
    log_configure()
    try:
        logger.info("Start scanning")
        crawler = Yad4PetsCrawler()
        crawler.launch()
        crawler.update_config_file()
        logger.info("End scanning")
    finally:
        upload_logs()


if __name__ == '__main__':
    main()