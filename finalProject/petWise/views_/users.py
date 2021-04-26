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

    def add_user(self, request):
        return HttpResponse("Hello, world. You're at the polls index.")

    def get_user(self, request, user_id):
        user_data = self.firestore_client.collection(u'users').document(user_id).get()
        print(user_data)
        return HttpResponse(str(user_data.to_dict()))
