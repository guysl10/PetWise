from django.http import HttpResponse
from rest_framework.decorators import api_view

from .views_ import users


def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")


@api_view(['POST'])
def add_user(request):
    return users.add_user(request)


@api_view(['GET'])
def get_user(request, user_id):
    return users.get_user(request, user_id)
