from django.http import HttpResponse
from .firebase_connection import FirebaseConnection
from singleton_decorator import singleton

@singleton
class Views:
    def __init__(self):
        self.firestore_client = FirebaseConnection().firestore_client

    def get_articles(self, request):
        articles = [doc.get().to_dict() for doc in self.firestore_client.collection(u'article').list_documents()]
        return HttpResponse(str(articles))