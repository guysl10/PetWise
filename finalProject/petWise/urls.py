from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('users/<str:user_id>', views.get_user, name='get_user'),
    path('articles', views.get_articles, name='get_articles'),
    path('adoption', views.get_adoption, name='get_adoption'),
    path('adoption/id/<str:document_id>', views.get_adoption_day_by_id, name='get_adoption_day_by_id'),
    path('adoption/delete/<str:document_id>', views.delete_adoption, name='delete_adoption'),
    path('association', views.get_association, name='get_association'),
    path('association/delete/<str:document_id>', views.delete_association, name='delete_association'),
    path('stores', views.get_stores, name='get_stores'),
    path('stores/delete/<str:document_id>', views.delete_store, name='delete_store'),
    path('adoption_days', views.get_adoption_days, name='get_adoption_days'),
    path('adoption_days/delete/<str:document_id>', views.delete_adoption_day, name='delete_adoption_day'),
    path('users/delete/<str:user_id>', views.delete_user, name='delete_user'),
    path('users/edit/<str:user_id>', views.edit_user, name='edit_user'),
    path('login', views.log_in, name='log_in'),
    path('logout', views.log_out, name='log_out'),
    path('products/<str:label>', views.get_products, name='get_products'),
    path('products/delete/<str:document_id>', views.delete_product, name='delete_product'),
    path('use_analytics/add', views.add_use_analytics, name='add_use_analytics'),
    path('summary/users', views.get_users_count, name='get_users_count'),
    path('summary/adoption_days', views.get_adoption_days,
         name='get_adoption_days'),
    path('summary/pets', views.get_pets_count, name='get_pets_count'),
    path('summary/products', views.get_products_count, name='get_products_count'),
    path('register', views.register_user, name='register_user'),
    path('delete_user', views.delete_user, name='delete_user'),
    path('update_email', views.update_email, name='update_email'),
    path('forgot_password', views.update_password, name='update_password'),
]
