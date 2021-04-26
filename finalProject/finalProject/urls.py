"""finalProject URL Configuration

The `urlpatterns` list routes URLs to views_. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views_
    1. Add an import:  from my_app import views_
    2. Add a URL to urlpatterns:  path('', views_.home, name='home')
Class-based views_
    1. Add an import:  from other_app.views_ import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('petWise/', include('petWise.urls')),
    path('admin/', admin.site.urls),
]