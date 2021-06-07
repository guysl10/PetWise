from django.http import HttpResponse
import db_serv
from singleton_decorator import singleton
import json

@singleton
class Views:
    def __init__(self):
        self.firestore_client = db_serv.petwise_serv.firestore_client

    def get_association_by_id(self, request, document_id):
        association = self.firestore_client.collection(u'association').document(document_id).get()
        return HttpResponse(association)

    def get_association(self, request):
        associations = [doc.get().to_dict() for doc in
                        self.firestore_client.collection(u'association').list_documents()]
        association = {'data': associations}
        return HttpResponse(json.dumps(association))

    def delete_association(self, request, document_id):
        self.firestore_client.collection(u'association').document(document_id).delete()
        return HttpResponse(f'Deleted {document_id}')

    def update_association(self, request, document_id, data):
        self.firestore_client.collection(u'association').document(document_id).set(data)
