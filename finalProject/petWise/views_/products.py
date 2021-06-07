from django.http import HttpResponse
import db_serv
from singleton_decorator import singleton
import json

@singleton
class Views:
    def __init__(self):
        self.firestore_client = db_serv.petwise_serv.firestore_client

    def get_product_by_id(self, document_id):
        adoption = self.firestore_client.collection(u'products').document(document_id).get()
        return HttpResponse(adoption)

    def get_product(self, request, label):
        adoptions = [doc.get().to_dict() for doc in self.firestore_client.collection(u'products').list_documents() if
                     label in doc.get().to_dict().get('labels')]
        adoptions = {'data': adoptions}
        return HttpResponse(json.dumps(adoptions))

    def delete_product(self, request, document_id):
        self.firestore_client.collection(u'products').document(document_id).delete()
        return HttpResponse(f'Deleted {document_id}')

    def update_product(self, request, document_id, data):
        self.firestore_client.collection(u'products').document(document_id).set(data)
