from django.urls import path


from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('users/add', views.add_user, name='add_user'),
    path('users/<str:user_id>', views.get_user, name='get_user'),
    path('articles', views.get_articles, name='get_articles'),
    path('adoption/<str:pet_kind>', views.get_adoption, name='get_adoption'),
]
