#пути указывают адреса в браузерной строке
from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
                  path('foodood/', views.index), # главная хтмл
                  path('foodood/api/card/', views.card),  # карточки
                  path('foodood/api/ingredientList/', views.ingredientList) , # список инредиентов в конструкторе
                  path('api/getdish/', views.getdish) , # блюда ы конструкторе
                  path('api/getIngredents/', views.getIngredients),  # в логике конструктора фильтр
                  path('api/getCategories/', views.getCategories)  # фильтр категорий на главной
              ] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
