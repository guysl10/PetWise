import json
import firebase
import requests
from bs4 import BeautifulSoup


class PetsCrawler:
	"""
	Scan for pets in given sites from config file.
	:ivar urls: all urls to scan for pets.
	"""

	def __init__(self):
		with open("/opt/config.json", "rb") as f:
			data = json.load(f)
			self.urls = data["urls"]

	# TODO: add last search id.
	def scan_by_id(
			self, site_name: str,
			start_id: int, end_id: int,
			no_relevant_str: str
	):
		pets = {}
		for i in range(start_id, end_id):
			response = requests.get(self.urls[site_name] + str(i))
			data = response.content.decode("utf-8")
			if data.find(no_relevant_str) != -1:
				pets[i] = self.extract_info(data)

		return pets

	def extract_info(self, html_data):
		parser = BeautifulSoup(html_data)
		bs_data = parser.find(
			'table',
			attrs={'class': 'table mb-tb-fixmargin'}
		)
		pet_data = {}
		data_title = ""
		for line in bs_data.find_all("tr"):
			for index, row in enumerate(line.find_all("td")):
				if index % 2 == 0:
					data_title = row.text
				else:
					pet_data[data_title] = row.text
		return pet_data

	# def launch(self):
	# 	for url in self.urls:
	# 		#TODO: check from db the last id stored
	# 		pets = self.scan_by_id(url, 2000)


