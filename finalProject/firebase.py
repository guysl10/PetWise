import time
from datetime import timedelta
from uuid import uuid4

from loguru import logger
from firebase_admin import firestore, initialize_app, credentials

CRED = credentials.Certificate(
	r"petwise-547d7-4bb8fbabc376.json")



class Singleton(type):
	_instances = {}

	def __call__(cls, *args, **kwargs):
		if cls not in cls._instances:
			cls._instances[cls] = super(Singleton, cls).__call__(
				*args,
				**kwargs
			)
		return cls._instances[cls]


class PetWiseServ(metaclass=Singleton):
	def __init__(self):
		logger.info("Connecting to Firebase")
		try:
			self.app = initialize_app(CRED)
			self.firestore_client = firestore.client(self.app)
		except Exception as e:
			logger.exception(f"Failed connecting to firebase \n{e}")
		logger.info(f"Connection to firebase was successful")


petwise_serv = PetWiseServ()
