import json
import firebase
import requests
from bs4 import BeautifulSoup
from firebase import petwise_serv


class PetsCrawler:
	"""
	Scan for pets in given sites from config file.
	:ivar urls: all urls to scan for pets.
	"""

	def __init__(self):
		with open("/opt/config.json", "rb") as f:
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
			response = requests.get(self.urls[site_name] + str(i))
			data = response.content.decode("utf-8")
			if data.find(no_relevant_str) != -1:
				pets[i] = self.extract_info(data)

		return pets

	@staticmethod
	def extract_info(html_data):
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

	def launch(self):
		pets = {}
		for url in self.urls:
			# TODO: check from db the last id stored
			pets = self.scan_by_id(
				url['url'],
				url["last_id"]+1,
				url["last_id"]+101, url["ignore_sign"]
			)

		pets_db = petwise_serv.collection(
			u'pets')
		for result in pets:
			for value in pets[result]:
				pets_db.add(value)
