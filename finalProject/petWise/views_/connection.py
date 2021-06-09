from django.http import HttpResponse, HttpResponseNotFound, \
    HttpResponseBadRequest, JsonResponse


# from firebase_admin import auth
import db_serv
from db_serv import petwise_serv


from singleton_decorator import singleton


@singleton
class Views:
    def __init__(self):
        self.auth = petwise_serv.firebase_admin.auth()
        self.db = petwise_serv.firebase_admin.database()
        self.firestore_client = db_serv.petwise_serv.firestore_client

    def log_in(self, email, password):
        try:
            self.auth.sign_in_with_email_and_password(email, password)
        except:
            return HttpResponseBadRequest()
        return HttpResponse("success login")

    def log_out(self):
        self.auth.current_user = None
        return HttpResponse("logged out")

    def register(self, email, password, username):
        try:
            self.auth.create_user_with_email_and_password(email, password)
            self.log_in(email, password)
            self.firestore_client.collection(u'users').add({'email': email, 'is_admin': False, 'username': username})
        except:
            return HttpResponseBadRequest()
        return HttpResponse("registered successfully")

    def is_logged_in(self, request):
        return HttpResponse(self.auth.current_user is not None)

    def is_admin(self):
        if self.auth.current_user is not None:
            email = self.auth.current_user['email']
            users = self.firestore_client.collection(u'users').get()
            for user in users:
                if user._data['email'] == email:
                    return HttpResponse(user._data['is_admin'])
            return HttpResponseNotFound()
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

    def get_users(self, request):
        users = [doc.get().to_dict() for doc in
                 db_serv.petwise_serv.firestore_client.collection(
                     u'users').list_documents()]

        return JsonResponse({'data': users})
