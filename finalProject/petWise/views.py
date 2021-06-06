from django.http import HttpResponse
from rest_framework.decorators import api_view

from .views_ import users, articles, adoption, adoption_days, store, \
    association, connection, products, use_analytics, summary


def index(request):
    # TODO:route to index
    return HttpResponse("Hello, world. You're at the polls index.")


@api_view(['POST'])
def add_user(request):
    return users.add_user(request)


@api_view(['POST'])
def edit_user(request, user_id):
    return users.Views().update_user(request, user_id)


@api_view(['GET'])
def get_user(request, user_id):
    return users.Views().get_user(request, user_id)


@api_view(['GET'])
def get_articles(request, search='אימוץ חיות'):
    return articles.Views().get_articles(request, search)


@api_view(['GET'])
def get_adoption(request, pet_kind='כלב'):
    return adoption.Views().get_adoption(request, pet_kind)


@api_view(['DELETE'])
def delete_adoption(request, document_id):
    return adoption.Views().delete_adoption(request, document_id)


@api_view(['POST'])
def edit_adoption(request, document_id, data):
    return adoption.Views().update_adoption(request, document_id, data)


@api_view(['GET'])
def get_association(request):
    return association.Views().get_association(request)


@api_view(['DELETE'])
def delete_association(request, document_id):
    return association.Views().delete_adoption(request, document_id)


@api_view(['POST'])
def edit_association(request, document_id, data):
    return association.Views().update_association(request, document_id, data)


@api_view(['GET'])
def get_adoption_days(request):
    return adoption_days.Views().get_adoption_days(request)


@api_view(['DELETE'])
def delete_adoption_day(request, document_id):
    return adoption_days.Views().delete_adoption_days(request, document_id)


@api_view(['POST'])
def edit_adoption_day(request, document_id, data):
    return adoption_days.Views().update_adoption_days(request, document_id,
                                                      data)


@api_view(['GET'])
def get_stores(request):
    return store.Views().get_stores(request)


@api_view(['DELETE'])
def delete_store(request, document_id):
    return store.Views().delete_store(request, document_id)


@api_view(['POST'])
def edit_store(request, document_id, data):
    return store.Views().update_store(request, document_id, data)


@api_view(['DELETE'])
def delete_user(request, user_id):
    return users.Views().delete_user(request, user_id)


@api_view(['POST'])
def log_in(request):
    return connection.log_in(request)


@api_view(['GET'])
def log_out(request):
    return connection.log_out(request)


@api_view(['GET'])
def get_products(request, label='dog'):
    return products.Views().get_product(request, label)


@api_view(['DELETE'])
def delete_product(request, document_id):
    return products.Views().delete_product(request, document_id)


@api_view(['POST'])
def edit_product(request, document_id, data):
    return products.Views().update_product(request, document_id, data)


@api_view(['POST'])
def add_use_analytics(request, data):
    return use_analytics.Views().add_use_analytics(request, data)


@api_view(['GET'])
def get_users_count(request):
    return summary.Views().get_users_count(request)


@api_view(['GET'])
def get_pets_count(request):
    return summary.Views().get_pets_count(request)


@api_view(['GET'])
def get_products_count(request):
    return summary.Views().get_products_count(request)
