from django.shortcuts import render
from django.http import HttpResponse
from .models import Person
from django.contrib.auth.hashers import make_password
from django.contrib import auth
from django.contrib.auth import authenticate
