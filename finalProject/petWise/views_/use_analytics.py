import json

from django.http import HttpResponse, JsonResponse
from django.utils.datetime_safe import datetime
from google.cloud import firestore
from singleton_decorator import singleton

import db_serv


@singleton
class Views:
    def __init__(self):
        self.firestore_client = db_serv.petwise_serv.firestore_client

    def add_use_analytics(self, request, data):
        for key in data:
            parsed_data = json.loads(key)
        self.firestore_client.collection('use_analytics').document(
            str(datetime.now())).set(parsed_data)
        return HttpResponse('true')

    def get_recommended_pets(self, request, data):
        analytics_collection = self.firestore_client.collection('use_analytics')
        most_viewed = analytics_collection.where('uid', '==', data['uid']).order_by(
            u'time', direction=firestore.Query.DESCENDING).limit(1)
        item = [result.to_dict() for result in most_viewed.stream()][0]
        pet_doc = self.firestore_client.collection(u'pets').document(item['pet'])
        pet = pet_doc.get()
        pet = pet.to_dict()

        recommendeds = []
        for pet_id in pet['similar_pets']:
            pet_ref = self.firestore_client.collection(u'pets').document(pet_id)
            pet_obj = pet_ref.get()
            recommendeds.append(pet_obj.to_dict())
        return JsonResponse({'data': recommendeds})

