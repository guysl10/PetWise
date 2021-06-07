from django.http import HttpResponse
import db_serv
from singleton_decorator import singleton
import json

@singleton
class Views:
    def __init__(self):
        self.firestore_client = db_serv.petwise_serv.firestore_client

    def get_store_by_id(self, request, document_id):
        pet_store = self.firestore_client.collection(u'pet_store').document(document_id).get()
        return HttpResponse(pet_store)

    def get_stores(self, request):
        pet_stores = [doc.get().to_dict() for doc in
                      self.firestore_client.collection(u'pet_store').list_documents()]
        stores = {'data': pet_stores}
        return HttpResponse(json.dumps(stores))

    def delete_store(self, request, document_id):
        self.firestore_client.collection(u'pet_store').document(document_id).delete()
        return HttpResponse(f'Deleted {document_id}')

    def update_store(self, request, document_id, data):
        self.firestore_client.collection(u'pet_store').document(document_id).set(data)
