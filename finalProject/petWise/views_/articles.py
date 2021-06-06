from django.http import HttpResponse
from .firebase_connection import FirebaseConnection
from singleton_decorator import singleton
from GoogleNews import GoogleNews
import json

@singleton
class Views:
    def get_articles(self, request, search='חיות'):
        googlenews = GoogleNews(lang='he', period='7d', encode='utf-8')
        googlenews.search(search)
        articles = []
        for i in range(2):
            articles.extend(googlenews.page_at(i))

        formatted_articles = []
        for article in articles:
            news = article
            news['datetime'] = str(news['datetime'])
            formatted_articles.append(news)

        data = {'data': formatted_articles}
        return HttpResponse(json.dumps(data))