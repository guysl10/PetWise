from django.urls import path


from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('users/add', views.add_user, name='add_user'),
    path('users/<str:user_id>', views.get_user, name='get_user'),
    path('articles', views.get_articles, name='get_articles'),
    path('adoption/<str:pet_kind>', views.get_adoption, name='get_adoption'),
    path('association', views.get_association, name='get_association'),
    path('stores', views.get_stores, name='get_stores'),
    path('adoption_days', views.get_adoption_days, name='get_adoption_days'),

]
