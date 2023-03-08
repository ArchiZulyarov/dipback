from django.db import models
from django.utils.translation import gettext_lazy as _
from datetime import datetime

from dishes.enums import MeasurementUnit


class Category(models.Model):
    name = models.CharField(
        verbose_name='Название',
        max_length=200,
        null=False
    )

    def __str__(self):
        return self.name

    class Meta:
        app_label = "dishes"
        verbose_name = "Категория"
        verbose_name_plural = "Категории"


class Ingredient(models.Model):
    name = models.CharField(
        verbose_name="Название",
        max_length=200,
        null=False
    )

    units = models.CharField(
        verbose_name="Единица Измерения",
        max_length=100,
        choices=MeasurementUnit.choices()
    )

    price = models.FloatField(
        verbose_name="Цена",
        default=0,
        null=True
    )

    def __str__(self):
        return self.name

    class Meta:
        app_label = "dishes"
        verbose_name = "Ингредиент"
        verbose_name_plural = "Ингредиенты"


class Dish(models.Model):
    name = models.CharField(verbose_name="Название",
                            max_length=100, null=False)

    image = models.ImageField(verbose_name="Фотография",
                              upload_to="dishes/%Y/%m/%d", null=True)

    price = models.FloatField(verbose_name="Цена", default=0, null=True)

    category = models.ForeignKey(
        to=Category,
        related_name="category",
        on_delete=models.SET_NULL,
        null=True,
        verbose_name=_("Категория")
    )

    def __str__(self):
        return self.name

    class Meta:
        app_label = "dishes"
        verbose_name = "Блюдо"
        verbose_name_plural = "Блюда"


class IngredientCalculation(models.Model):
    ingredient = models.ForeignKey(
        to=Ingredient,
        related_name="calculation",
        on_delete=models.SET_NULL,
        null=True,
        verbose_name=_("Ингредиент")
    )

    amount = models.IntegerField(verbose_name='Количество', default=0, null=True)

    def __str__(self):
        return f'{self.ingredient.name}: {self.amount} {self.ingredient.units}'

    class Meta:
        app_label = "dishes"
        verbose_name = "Калькуляция"
        verbose_name_plural = "Калькуляции"


class Recipe(models.Model):
    name = models.CharField(
        verbose_name="Название",
        max_length=200,
        null=False
    )

    ingredients = models.ManyToManyField(
        IngredientCalculation,
        verbose_name="Ингредиенты"
    )

    dish = models.ForeignKey(
        to=Dish,
        related_name="recipe",
        on_delete=models.SET_NULL,
        null=True,
        verbose_name=_("Блюдо")
    )

    description = models.CharField(
        verbose_name='Рецепт',
        max_length=3000,
        null=False
    )

    def __str__(self):
        return self.name

    class Meta:
        app_label = "dishes"
        verbose_name = "Рецепт"
        verbose_name_plural = "Рецепты"
