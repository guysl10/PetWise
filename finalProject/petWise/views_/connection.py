from django.http import HttpResponse
# from firebase_admin import auth

from db_serv import petwise_serv

from singleton_decorator import singleton


@singleton
class Views:
    def __init__(self):
        self.auth = petwise_serv.firebase_admin.auth()
        self.db = petwise_serv.firebase_admin.database()

    def log_in(self, email, password):
        self.auth.sign_in_with_email_and_password(email, password)
        return HttpResponse("success login")

    def log_out(self):
        self.auth.current_user = None
        return HttpResponse("logged out")

    def register(self, email, password):
        self.auth.create_user_with_email_and_password(email, password)
        return HttpResponse("registered successfully")

    def delete_user(self, request, email):
        # SignOut
        self.auth.current_user = None
        self.db.child("users").child(email).remove()
        return HttpResponse("True")

    def update_email(self, request, email, new_email):
        self.db.child("users").child(email).update(
            {"email": f"{new_email}"})
        return HttpResponse("True")

    def update_password(self, email):
        self.auth.send_password_reset_email(email)
        return HttpResponse("True")
