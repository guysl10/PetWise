from django.http import HttpResponse
from django.utils.datetime_safe import datetime
from singleton_decorator import singleton

import db_serv


@singleton
class Views:
    def __init__(self):
        self.firestore_client = db_serv.petwise_serv.firestore_client

    def add_use_analytics(self, request, data):
        self.firestore_client.collection('use_analytics').document(
            str(datetime.now())).set(data)
        return HttpResponse('true')
