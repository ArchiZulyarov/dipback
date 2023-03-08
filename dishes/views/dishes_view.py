from typing import List
from rest_framework import generics

from django.http import HttpResponse
from django.shortcuts import render
from django.contrib.auth.models import User
# from django.http import HttpResponse
from django.template import loader

from django.shortcuts import get_object_or_404
from ninja import Router
from ninja.pagination import paginate
from ninja.responses import Response

from dishes.models import Dish, Ingredient, Recipe, Category

from dishes.schemas import (
    DishOut,
    IngredientOut,
    RecipeOut,
    CategoryOut
)


dishes_router = Router(tags=["Dishes"])




def index(request):
    recipes = Recipe.objects.all()
    q = []
    for re in recipes:
        q = [re.description]
        # q.insert(re.name)

    return q
    # render(request, "test.html", context={"asd": q})


@dishes_router.get(
    "/index",
    auth=None
)
def show_index(request):
    template = loader.get_template('dishes/templates/index.html')

    return HttpResponse(template)


@dishes_router.get(
    "/dishes",
    response=List[DishOut],
    auth=None
)
@paginate
def show_dishes(request):
    dishes = Dish.objects.all()
    return dishes


@dishes_router.get(
    "/ingredients",
    response=List[IngredientOut],
    auth=None
)
@paginate
def show_ingredients(request):
    ingredients = Ingredient.objects.all()
    return ingredients


@dishes_router.get(
    "/recipes",
    response=List[RecipeOut],
    auth=None
)
@paginate
def show_recipes(request):
    recipes = Recipe.objects.all()

    return recipes


@dishes_router.get(
    "/categories",
    response=List[CategoryOut],
    auth=None
)
@paginate
def show_categories(request):
    categories = Category.objects.all()

    return categories


@dishes_router.get(
    "/populate",
    auth=None
)
def populate(request):
    User.objects.create_superuser(
        username='admin',
        email='admin@admin.admin',
        password='admin'
    )

    return Response(
        status=200,
        data='OK'
    )
