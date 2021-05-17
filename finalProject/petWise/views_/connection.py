import pyrebase
from django.http import HttpResponse
from singleton_decorator import singleton


@singleton
class Views:
    def __init__(self):
        self.firebase = pyrebase.initialize_app()

    def log_in(self, email, password):
        self.firebase.auth().sign_in_with_email_and_password(email, password)
        return HttpResponse("success login")

    def log_out(self):
        self.firebase.auth.signOut()
        return HttpResponse("logged out")

    def register(self, email, password):
        self.firebase.auth.create_user_with_email_and_password(email, password)
        return HttpResponse("registered successfully")
