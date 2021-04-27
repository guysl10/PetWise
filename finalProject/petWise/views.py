from django.http import HttpResponse
from rest_framework.decorators import api_view

from .views_ import users, articles, adoption


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


