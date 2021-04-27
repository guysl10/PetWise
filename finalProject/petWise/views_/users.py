from django.http import HttpResponse
from .firebase_connection import FirebaseConnection
from singleton_decorator import singleton

@singleton
class Views:
    def __init__(self):
        self.firestore_client = FirebaseConnection().firestore_client

    def add_user(self, request):
        return HttpResponse("Hello, world. You're at the polls index.")

    def get_user(self, request, user_id):
        user_data = self.firestore_client.collection(u'users').document(user_id).get()
        print(user_data)
        return HttpResponse(str(user_data.to_dict()))