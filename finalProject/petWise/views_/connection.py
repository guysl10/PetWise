from django.http import HttpResponse
from singleton_decorator import singleton
from .firebase_connection import FirebaseConnection

@singleton
class Views:
    def __init__(self):
        self.firestore_client = FirebaseConnection().firestore_client

    def log_in(self, request):
        return HttpResponse("Hello, world. You're at the polls index.")

    def log_out(self, request):
        return HttpResponse("logged out")