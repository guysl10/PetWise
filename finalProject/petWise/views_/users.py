from django.http import HttpResponse
from firebase_admin import auth

from .firebase_connection import FirebaseConnection
from singleton_decorator import singleton


def create_user(user_id, email):
    return auth.create_user(email=email, uid=user_id) if user_id else auth.create_user(email=email)


def update_email(user_id, email):
    return auth.update_user(user_id, email=email)


def update_display_name(user_id, display_name):
    return auth.update_user(user_id, display_name=display_name)


@singleton
class Views:
    def __init__(self):
        self.firestore_client = FirebaseConnection().firestore_client

    def get_user_by_id(self, request, user_id):
        user_data = self.firestore_client.collection(u'users').document(user_id).get()
        return HttpResponse(str(user_data.to_dict()))

    def delete_user(self, request, user_id):
        # TODO: check if user is connected and delete subdocuments
        self.firestore_client.collection(u'users').document(user_id).delete()
        auth.delete_user(user_id)
        return HttpResponse("true")

    def update_user(self, request, user_id):
        self.firestore_client.collection(u'users').document(user_id).update(request.body())
        return HttpResponse("true")
