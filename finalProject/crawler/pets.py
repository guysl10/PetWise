import json
import requests
from bs4 import BeautifulSoup
from firebase import petwise_serv
# from loguru import logger


class PetsCrawler:
	"""
	Scan for pets in given sites from config file.
	:ivar urls: all urls to scan for pets.
	"""

	def __init__(self):
		with open("./crawler/config.json", "rb") as f:
			self.urls = json.load(f)

	# self.last_id = self.check_last_id()

	# # TODO: get last search id.
	# def check_last_id(self):
	# 	return 0

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
	def extract_info(html_data):
		# TODO: extract images of the pet.
		parser = BeautifulSoup(html_data)
		base_data = parser.find_all(
			'table',
			attrs={'class': 'table'}
		)
		description = parser.find(
			'div',
			attrs={'class': 'dog-description'}
		)

		pet_data = {}
		data_title = ""
		for table in base_data:
			for line in table.find_all("tr"):
				for index, row in enumerate(line.find_all("td")):
					if index % 2 == 0:
						data_title = row.text
					else:
						pet_data[data_title] = row.text

			pet_data["description"] = description.text

		return pet_data

	def launch(self):
		pets = {}
		for site in self.urls:
			# TODO: check from db the last id stored
			pets.update(
				{site: self.scan_by_id(
					self.urls[site]['url'],
					self.urls[site]["last_id"] + 1,
					self.urls[site]["last_id"] + 101,
					self.urls[site]["ignore_sign"]
				)}
			)

		pets_db = petwise_serv.firestore_client.collection(u'pets')

		for result in pets:
			for pet_id in pets[result]:
				# logger.info(f"uploading to firestore {result} {pet_id}")
				print(f"uploading to firestore {result} {pet_id}")
				pets_db.add(pets[result][pet_id])


def main():
	a = PetsCrawler()
	a.launch()


if __name__ == '__main__':
	main()
