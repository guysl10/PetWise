from typing import Dict

import pymongo
import pyrebase
from loguru import logger
from firebase_admin import firestore, initialize_app, credentials

from crawler.utils import log_wrapper
#CRED_PATH = "/home/guy/PycharmProjects/PetWise/finalProject/petwise-547d7" \
   #"-4bb8fbabc376.json"
CRED_PATH = r"petwise-547d7-4bb8fbabc376.json"


FIRE_BASE_CONFIG = {
    "apiKey": "AIzaSyD5SEbL6qC7wMvqBFvRkRmIk9ERYIorKmk",
    "authDomain": "petwise-547d7.firebaseapp.com",
    "projectId": "petwise-547d7",
    "databaseURL": "https://petwise-547d7.firebaseio.com",
    "storageBucket": "petwise-547d7.appspot.com",
    "messagingSenderId": "991939279807",
    "appId": "1:991939279807:web:aaa2a7b1d3b20e98573f0a",
    "measurementId": "G-ZCDDT2YLPS"
  }


class Singleton(type):
    _instances = {}

    def __call__(cls, *args, **kwargs):
        if cls not in cls._instances:
            cls._instances[cls] = super(Singleton, cls).__call__(
                *args,
                **kwargs
            )
        return cls._instances[cls]


class FireBasePetWiseServ(metaclass=Singleton):
    def __init__(self):
        cred = credentials.Certificate(CRED_PATH)
        logger.info("Connecting to Firebase")
        try:
            self.app = initialize_app(cred)
            self.firebase_admin = pyrebase.initialize_app(FIRE_BASE_CONFIG)
            self.firestore_client = firestore.client(self.app)

        except Exception as e:
            logger.exception(f"Failed connecting to firebase \n{e}")
            return
        logger.info(f"Connection to firebase was successful")

    @log_wrapper
    def insert_many(
            self, collection_name: str, items: Dict[str, Dict[str, str]]
    ):
        """
        Connect to firestore inside firebase and upload all new items.

        :param collection_name: table name to upload all data to.
        :param items: All items data to upload to firestore.
        """
        items_db = self.firestore_client.collection(
            collection_name)
        for item_id in items:
            logger.info(f"uploading to firestore {item_id}")
            if isinstance(items[item_id], Dict):
                items_db.document(str(item_id)).set(items[item_id])
            else:
                items_db.document(str(item_id)).set({item_id: items[item_id]})


class MongoPetwiseServ(metaclass=Singleton):
    def __init__(self):
        self.myclient = pymongo.MongoClient("mongodb://localhost:27017/")
        self.mydb = self.myclient["petwise"]

    @log_wrapper
    def insert_many(
            self, collection_name: str, items: Dict[str, Dict[str, str]]
    ):
        """
        Connect to mongodb upload all new items.

        :param collection_name: table name to upload all data to.
        :param items: All items data to upload to mongo.
        """
        mycol = self.mydb[collection_name]
        for key in items:
            if isinstance(items[key], Dict):
                mycol.insert(items[key])
            else:
                mycol.insert({key: items[key]})


# Working with Firebase:
petwise_serv = FireBasePetWiseServ()

# Working with MongoDB:
# petwise_serv = MongoPetwiseServ()
