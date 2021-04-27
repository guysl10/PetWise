from django.http import HttpResponse
import firebase_admin
from firebase_admin import firestore, credentials
import os
from singleton_decorator import singleton

CRED = credentials.Certificate(os.path.join(os.path.dirname(__file__), "petwise-547d7-firebase-adminsdk-70638-65e70cc071.json"))

@singleton
class Views:
    def __init__(self):
        app = firebase_admin.initialize_app(CRED)
        self.firestore_client = firestore.client(app)

    def log_in(self, request):
        return HttpResponse("Hello, world. You're at the polls index.")

    def log_out(self, request):
        return HttpResponse("logged out")
