from django.http import HttpResponse
from .firebase_connection import FirebaseConnection
from singleton_decorator import singleton
from GoogleNews import GoogleNews

@singleton
class Views:
    def __init__(self):
        self.firestore_client = FirebaseConnection().firestore_client

    def get_articles(self, request, search='חיות'):
        googlenews = GoogleNews(lang='he', period='7d', encode='utf-8')
        googlenews.search(search)
        articles = []
        for i in range(5):
            articles.extend(googlenews.page_at(i))
        return HttpResponse(articles)

