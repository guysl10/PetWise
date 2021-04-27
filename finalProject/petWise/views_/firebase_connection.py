import os

import firebase_admin

from firebase_admin import firestore, credentials
from singleton_decorator import singleton

CRED = credentials.Certificate(
    os.path.join(os.path.dirname(__file__), "petwise-547d7-firebase-adminsdk-70638-65e70cc071.json"))

@singleton
class FirebaseConnection:
    def __init__(self):
        app = firebase_admin.initialize_app(CRED)
        self.firestore_client = firestore.client(app)