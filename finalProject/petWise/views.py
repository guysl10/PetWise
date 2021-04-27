from django.http import HttpResponse
from rest_framework.decorators import api_view

from .views_ import users, articles, adoption, adoption_days, store, association


def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")


@api_view(['POST'])
def add_user(request):
    return users.Views().add_user(request)


@api_view(['GET'])
def get_user(request, user_id):
    return users.Views().get_user(request, user_id)


@api_view(['GET'])
def get_articles(request):
    return articles.Views().get_articles(request)


@api_view(['GET'])
def get_adoption(request, pet_kind):
    return adoption.Views().get_adoption(request, pet_kind)


@api_view(['GET'])
def get_association(request):
    return association.Views().get_association(request)


@api_view(['GET'])
def get_adoption_days(request):
    return adoption_days.Views().get_adoption_days(request)


@api_view(['POST'])
def delete_adoption_day(request, document_id):
    return adoption_days.Views().delete_adoption_days(request, document_id)


@api_view(['GET'])
def get_stores(request):
    return store.Views().get_stores(request)


@api_view(['POST'])
def delete_store(request, document_id):
    return store.Views().delete_store(request, document_id)
