import time
from datetime import timedelta
from uuid import uuid4

from firebase_admin import firestore, initialize_app, credentials

CRED = credentials.Certificate(
	r"petwise-547d7-firebase-adminsdk-70638-65e70cc071.json")


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
		self.app = initialize_app(CRED)
		self.firestore_client = firestore.client(self.app)


petwise_serv = PetWiseServ()
