from django.http import HttpResponse
from .firebase_connection import FirebaseConnection
from singleton_decorator import singleton

@singleton
class Views:
    def __init__(self):
        self.firestore_client = FirebaseConnection().firestore_client

    def get_stores(self, request):
        pet_stores = [doc.get().to_dict() for doc in self.firestore_client.collection(u'pet_store').list_documents()]
        return HttpResponse(str(pet_stores))