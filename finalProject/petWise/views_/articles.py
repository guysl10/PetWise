from django.http import HttpResponse
from .firebase_connection import FirebaseConnection
from singleton_decorator import singleton
from GoogleNews import GoogleNews

@singleton
class Views:
    def __init__(self):
        self.firestore_client = FirebaseConnection().firestore_client

    def get_article_by_id(self, document_id):
        article = self.firestore_client.collection(u'articles').document(document_id).get()
        return HttpResponse(article)

    def get_articles(self, request):
        articles = [doc.get().to_dict() for doc in self.firestore_client.collection(u'article').list_documents()]
        return HttpResponse(str(articles))

    def delete_article(self, request, document_id):
        self.firestore_client.collection(u'articles').document(document_id).delete()
        return HttpResponse(f'Deleted {document_id}')

