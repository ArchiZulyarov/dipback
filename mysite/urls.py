"""mysite URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from dishes.views import dishes_view
from ninja import NinjaAPI

from dishes.views import dishes_module_router


api = NinjaAPI(csrf=False)

api.add_router("", dishes_module_router, auth=None)

admin.site.site_header = "FoodHelper Admin"
admin.site.site_title = "FoodHelper Admin"
admin.site.index_title = "FoodHelper Admin"
urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', api.urls),
    path('', include('frontend.urls')),
    path('foodood/', dishes_view.index),
]

