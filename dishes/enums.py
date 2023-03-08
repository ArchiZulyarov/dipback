from enum import Enum


class MeasurementUnit(str, Enum):
    l = "л"
    ml = "мл"
    kg = "кг"
    g = "г"

    @classmethod
    def choices(cls):
        return tuple((i.name, i.value) for i in cls)