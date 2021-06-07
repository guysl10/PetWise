from django.http import HttpResponse
import db_serv
from singleton_decorator import singleton
import json


@singleton
class Views:
    def __init__(self):
        self.firestore_client = db_serv.petwise_serv.firestore_client

    def get_adoption_day_by_id(self, request, document_id):
        adoption_day = self.firestore_client.collection(u'adoption_days').document(document_id).get()
        return HttpResponse(adoption_day)

    def get_adoption_days(self, request):
        adoption_days = [doc.get().to_dict() for doc in
                         self.firestore_client.collection(u'adoption_days').list_documents()]
        days = {'data': adoption_days}
        return HttpResponse(json.dumps(days))

    def delete_adoption_days(self, request, document_id):
        self.firestore_client.collection(u'adoption_days').document(document_id).delete()
        return HttpResponse(f'Deleted {document_id}')

    def update_adoption_days(self, request, document_id, data):
        self.firestore_client.collection(u'adoption_days').document(document_id).set(data)
