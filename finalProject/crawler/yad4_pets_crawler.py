import json
import uuid
from datetime import date
from typing import Dict, List, Union
from bs4 import BeautifulSoup
from loguru import logger

from crawler.utils import _safe_get_requests, log_wrapper, log_configure
from db_serv import petwise_serv


class Yad4PetsCrawler:
    """
    Scan for pets in given sites from config file.

    :ivar urls: all urls to scan for pets.
    """

    def __init__(self):
        # with open("./crawler/config.json", "rb") as f:
        with open(
                "/home/guy/PycharmProjects/PetWise/finalProject/crawler"
                "/config.json",
                "rb"
        ) as f:
            data = json.load(f)
            self.urls = data

    def try_extract_pet_from_site(
            self, site_name: str, ignore_sign: str
    ) -> Union[Dict[str, str], None]:
        """

        :param site_name: Full url to extract pet from
        :param ignore_sign: If this sign found inside get request, skip to
        next id.
        :return: None if no pet was found, else the pet
        """
        logger.info(f"Scanning {site_name}")
        response = _safe_get_requests(f"{site_name}")
        if response is not None:
            data = response.content.decode("utf-8")
            if data.find(ignore_sign) == -1:
                pet = self.extract_info(data)
                pet["url"] = site_name
                pet["id"] = str(uuid.uuid1())
                return pet
            else:
                return None

    def scan_by_id(
            self, site_name: str, options: List[str],
            start_id: int, end_id: int,
            ignore_sign: str
    ) -> Dict[int, Dict[str, str]]:
        """
        According to start & end id, extract from site all puppies data.

        :param site_name: Base url for requests.
        :param options: all options of pets.
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
            pet = self.try_extract_pet_from_site(f"{site_name}{options[0]}-"
                                                 f"{str(i)}", ignore_sign)
            if pet is None:
                pet = self.try_extract_pet_from_site(
                    f"{site_name}{options[1]}-"
                    f"{str(i)}", ignore_sign)
            if pet is not None:
                pets[i] = pet
                new_pets_count += 1

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
            end_scan = self.get_last_id(f"{self.urls[site]['url']}dog-1")
            if end_scan != self.urls[site]["last_id_scanned"]:
                pets.update(
                    {site: self.scan_by_id(
                        self.urls[site]['url'],
                        ['dog', 'cat'],
                        self.urls[site]["last_id_scanned"] + 1,
                        end_scan,
                        self.urls[site]["ignore_sign"]
                    )}
                )
                self.urls[site]["last_id_scanned"] = end_scan

        for key in pets:
            petwise_serv.insert_many(u'pets', pets[key])

    def update_config_file(self):
        # with open("./crawler/config.json", "w") as f:
        with open(
            "/home/guy/PycharmProjects/PetWise/finalProject/crawler"
            "/config.json",
            "w"
        ) as f:
            json.dump(self.urls, f)


def upload_logs():
    """Upload log file to firebase."""
    with open("petwise.log", "r") as f:
        log_data = f.readlines()
    petwise_serv.insert_many(
        "yad4_logs", {date.today().strftime("%d/%m/%Y"): log_data}
    )


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
