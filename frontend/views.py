from django.core import serializers
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from rest_framework import generics
from django.db import connection, connections

from dishes.serializ.Serialize import LeadSerializer


# Create your views here.
def index(request):
    return render(request, 'index.html')


def card(request):
    cursor = connections['default'].cursor()
    cursor.execute(
        "SELECT distinct d.id, d.name as title, d.image, r.description, dc.name " +
        "FROM dishes_dish d " +
        "JOIN dishes_recipe r " +
        "ON d.id = r.dish_id " +
        "JOIN dishes_recipe_ingredients ri ON r.id = ri.recipe_id " +
        "JOIN dishes_ingredientcalculation ic ON ic.id = ri.ingredientcalculation_id " +
        "JOIN dishes_ingredient it ON it.id = ic.ingredient_id " +
        "JOIN dishes_category dc ON dc.id = d.category_id"
    )
    objs = cursor.fetchall()
    json_data = []
    for obj in objs:
        json_data.append({"id": obj[0],
                          "title": obj[1],
                          "image": obj[2],
                          "text": obj[3],
                          "category": obj[4],
                          })
    return JsonResponse(json_data, safe=False)


def getIngredients(request):
    cursor = connections['default'].cursor()
    cursor.execute("SELECT  d.id, it.name, it.units, ic.amount " +
                   "FROM dishes_dish d " +
                   "JOIN dishes_recipe r ON d.id = r.dish_id " +
                   "JOIN dishes_recipe_ingredients ri ON r.id = ri.recipe_id " +
                   "JOIN dishes_ingredientcalculation ic ON ic.id = ri.ingredientcalculation_id " +
                   "JOIN dishes_ingredient it ON it.id = ic.ingredient_id " +
                   "JOIN dishes_category dc ON dc.id = d.category_id " +
                   "WHERE d.name = '" + request.GET.get('name') + "'")
    objs = cursor.fetchall()
    print(objs)
    json_data = []
    for obj in objs:
        json_data.append({"id": obj[0],
                          "name": obj[1],
                          "unit": obj[2],
                          "amount": obj[3],
                          })
    return JsonResponse(json_data, safe=False)

def getCategories(request):
    cursor = connections['default'].cursor()
    cursor.execute("SELECT * from dishes_category")
    objs = cursor.fetchall()
    json_data = []
    for obj in objs:
        json_data.append({"id": obj[0],
                          "name": obj[1],
                          })
    return JsonResponse(json_data, safe=False)


def ingredientList(request):
    cursor = connections['default'].cursor()
    cursor.execute("SELECT id, name FROM dishes_ingredient")
    objs = cursor.fetchall()
    json_data = []
    for obj in objs:
        json_data.append({"id": obj[0],
                          "name": obj[1],
                          })
    return JsonResponse(json_data, safe=False)


def getdish(request):
    # print(request.GET['arr'])
    # return HttpResponse(request.GET.get('arr'))
  

    cursor = connections['default'].cursor()
    cursor.execute(
        "SELECT  d.id, d.name, COUNT(d.name) " +
        "FROM dishes_dish d " +
        "JOIN dishes_recipe r ON d.id = r.dish_id " +
        "JOIN dishes_recipe_ingredients ri ON r.id = ri.recipe_id " +
        "JOIN dishes_ingredientcalculation ic ON ic.id = ri.ingredientcalculation_id " +
        "JOIN dishes_ingredient it ON it.id = ic.ingredient_id " +
        "GROUP BY d.name " +
        "HAVING d.name IN (" +
        "SELECT distinct  d.name " +
        "FROM dishes_dish d " +
        "JOIN dishes_recipe r " +
        "ON d.id = r.dish_id " +
        "JOIN dishes_recipe_ingredients ri ON r.id = ri.recipe_id " +
        "JOIN dishes_ingredientcalculation ic ON ic.id = ri.ingredientcalculation_id " +
        "JOIN dishes_ingredient it ON it.id = ic.ingredient_id " +
        "WHERE it.name IN(" + request.GET.get('arr') + ") " +
        ")     ORDER BY d.name desc")
    objs = cursor.fetchall()
    json_dataAllCount = []
    for obj in objs:
        json_dataAllCount.append({
            obj[1]: obj[2]
        }
        )

    arr = request.GET['arr']
    cursor.execute("select  d.id, d.name as title, d.image, r.description, d.name, COUNT( d.name) " +
                   "FROM dishes_dish d " +
                   "JOIN dishes_recipe r " +
                   "ON d.id = r.dish_id " +
                   "JOIN dishes_recipe_ingredients ri ON r.id = ri.recipe_id " +
                   "JOIN dishes_ingredientcalculation ic ON ic.id = ri.ingredientcalculation_id " +
                   "JOIN dishes_ingredient it ON it.id = ic.ingredient_id " +
                   "WHERE it.name IN(" + request.GET.get('arr') + ")" +
                   "GROUP By d.name     ORDER BY d.name desc")
    objs = cursor.fetchall()
    json_data = []
    # print(json_dataAllCount)
    i = 0
    for obj in objs:
        json_data.append({
            "id": obj[0],
            "title": obj[1],
            "image": obj[2],
            "text": obj[3],
            "category": obj[4],
            "percent": (100 * obj[5]) / json_dataAllCount[i][obj[1]]
        })
        i = i + 1
    print( json_dataAllCount)

    return JsonResponse(json_data, safe=False)


class LeadListCreate(generics.ListCreateAPIView):
    with connection.cursor() as cursor:
        cursor.execute('select * from dishes_dish')
        # cursor.execute('SELECT d.id, d.name as title, d.image, r.description as text, d.name AS category FROM dishes_dish d JOIN dishes_recipe r ON d.id = r.dish_id')

    queryset = cursor.fetchall()
    # queryset = Dish.objects.select_related('dishes_recipe')
    # queryset = Dish.objects.raw(
    #     'SELECT d.id, d.name as title, d.image, r.description as text, d.name AS category FROM dishes_dish d JOIN dishes_recipe r ON d.id = r.dish_id')

    # queryset = Recipe.objects.raw(
    #     'SELECT d.id, d.name as title, d.image, r.description as text, d.name AS category FROM dishes_dish d JOIN dishes_recipe r ON d.id = r.dish_id')
    serializer_class = LeadSerializer
