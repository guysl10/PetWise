from django.http import HttpResponse
from .firebase_connection import FirebaseConnection
from singleton_decorator import singleton

@singleton
class Views:
    def __init__(self):
        self.firestore_client = FirebaseConnection().firestore_client

    def get_association(self, request):
        associations = [doc.get().to_dict() for doc in self.firestore_client.collection(u'association').list_documents()]
        return HttpResponse(str(associations))

    def delete_association(self, request, document_id):
        self.firestore_client.collection(u'association').document(document_id).delete()
        return HttpResponse(f'Deleted {document_id}')

    def update_association(self, request, document_id, data):
        self.firestore_client.collection(u'association').document(document_id).set(data)