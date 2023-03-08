from typing import Optional, List
from ninja import Schema, Field


class DishOut(Schema):
    id: int
    name: str
    image: Optional[str] = None


class IngredientOut(Schema):
    id: int
    name: str
    units: str
    price: float


class RecipeOut(Schema):
    id: int
    name: str
    ingredients: List[IngredientOut]
    dish: DishOut


class CategoryOut(Schema):
    id: int
    name: str
