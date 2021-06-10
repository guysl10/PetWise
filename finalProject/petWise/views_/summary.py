from django.http import HttpResponse, JsonResponse
from singleton_decorator import singleton
from db_serv import petwise_serv
from google.cloud import firestore


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

    def get_adoption_days_count(self, request):
        collection = petwise_serv.firestore_client.collection('adoption_days')
        documents = list(collection.get())
        return JsonResponse({"len": len(documents)})

    def get_last_products(self, request):
        collection = petwise_serv.firestore_client.collection('products')
        query = collection.order_by(
            u'_id', direction=firestore.Query.DESCENDING).limit(3)
        results = query.stream()
        return JsonResponse({'data': [result.to_dict() for result in results]})

    def get_last_pets(self, request):
        collection = petwise_serv.firestore_client.collection('pets')
        query = collection.order_by(
            u'id', direction=firestore.Query.DESCENDING).limit(3)
        results = query.stream()
        return JsonResponse({'data': [result.to_dict() for result in results]})


