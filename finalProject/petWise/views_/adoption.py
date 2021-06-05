from django.http import HttpResponse
from .firebase_connection import FirebaseConnection
from singleton_decorator import singleton
import json

@singleton
class Views:
    def __init__(self):
        self.firestore_client = FirebaseConnection().firestore_client

    def get_adoption_by_id(self, document_id):
        adoption = self.firestore_client.collection(u'pets').document(document_id).get()
        return HttpResponse(adoption)

    def get_adoption(self, request, pet_kind):
        adoptions = [doc.get().to_dict() for doc in self.firestore_client.collection(u'pets').list_documents() if
                     str(doc.get().to_dict().get('סוג')) == pet_kind]
        adoptions = {'data': adoptions}
        return HttpResponse(json.dumps(adoptions))

    def delete_adoption(self, request, document_id):
        self.firestore_client.collection(u'pets').document(document_id).delete()
        return HttpResponse(f'Deleted {document_id}')

    def update_adoption(self, request, document_id, data):
        self.firestore_client.collection(u'pets').document(document_id).set(data)
