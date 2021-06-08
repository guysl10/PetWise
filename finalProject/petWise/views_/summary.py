from django.http import HttpResponse, JsonResponse
from singleton_decorator import singleton
from db_serv import petwise_serv


@singleton
class Views:
    def get_users_count(self, request):
        collection = petwise_serv.firestore_client.collection('users')
        documents = list(collection.get())
        return JsonResponse({"len": len(documents)})

    def get_pets_count(self, request):
        collection = petwise_serv.firestore_client.collection('pets')
        documents = list(collection.get())
        return JsonResponse({"len": len(documents)})

    def get_products_count(self, request):
        collection = petwise_serv.firestore_client.collection('products')
        documents = list(collection.get())
        return JsonResponse({"len": len(documents)})

    def get_products_count(self, request):
        collection = petwise_serv.firestore_client.collection('adoption_days')
        documents = list(collection.get())
        return JsonResponse({"len": len(documents)})

