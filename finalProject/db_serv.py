from typing import Dict

import pymongo
from loguru import logger
from firebase_admin import firestore, initialize_app, credentials

from utils import log_wrapper

CRED_PATH = r"petwise-547d7-4bb8fbabc376.json"


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
            self.firestore_client = firestore.client(self.app)
        except Exception as e:
            logger.exception(f"Failed connecting to firebase \n{e}")
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
            items_db.document(item_id).set(items[item_id])


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
            mycol.insert(items[key])


# Working with Firebase:
# petwise_serv = FireBasePetWiseServ()

# Working with MongoDB:
petwise_serv = MongoPetwiseServ()
