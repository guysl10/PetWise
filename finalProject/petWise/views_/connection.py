from django.http import HttpResponse, HttpResponseNotFound, HttpResponseBadRequest

from db_serv import petwise_serv
import db_serv

from singleton_decorator import singleton


@singleton
class Views:
    def __init__(self):
        self.auth = petwise_serv.firebase_admin.auth()
        self.db = petwise_serv.firebase_admin.database()
        self.firestore_client = db_serv.petwise_serv.firestore_client
        self.current_user = None
        self._is_admin = False
        self._is_admin_fetched = False

    def log_in(self, email, password):
        try:
            self.auth.sign_in_with_email_and_password(email, password)
            self.current_user = email
        except:
            return HttpResponseBadRequest()
        return HttpResponse("success login")

    def log_out(self):
        self.auth.current_user = None
        self.current_user = None
        self._is_admin_fetched = False
        self._is_admin = False
        return HttpResponse("logged out")

    def register(self, email, password, username):
        try:
            self.auth.create_user_with_email_and_password(email, password)
            self.log_in(email, password)
            self.firestore_client.collection(u'users').add({'email': email, 'is_admin': False, 'username': username})
        except Exception as err:
            return HttpResponseBadRequest()
        return HttpResponse("registered successfully")

    def is_logged_in(self, request):
        return HttpResponse(self.current_user is not None)

    def is_admin(self):
        if self.current_user is not None and not self._is_admin_fetched:
            email = self.current_user
            users = self.firestore_client.collection(u'users').get()
            for user in users:
                if user._data['email'] == email:
                    self._is_admin_fetched = True
                    self._is_admin = user._data['is_admin']
                    return HttpResponse(self._is_admin)
            return HttpResponseNotFound()
        elif self._is_admin_fetched:
            return HttpResponse(self._is_admin)
        else:
            return HttpResponseNotFound()

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
        try:
            self.auth.send_password_reset_email(email)
        except:
            return HttpResponseBadRequest()
        return HttpResponse("True")
