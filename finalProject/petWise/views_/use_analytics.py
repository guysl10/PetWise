from django.http import HttpResponse
from django.utils.datetime_safe import datetime
from singleton_decorator import singleton

from finalProject.petWise.views_.firebase_connection import FirebaseConnection


@singleton
class Views:
    def __init__(self):
        self.firestore_client = FirebaseConnection().firestore_client

    def add_use_analytics(self, request, data):
        self.firestore_client.collection('use_analytics').document(str(datetime.now())).set(data)
        return HttpResponse('true')
