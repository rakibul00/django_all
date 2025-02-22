from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.
def first_app(request):
    return HttpResponse('<h1>hi rakib<h1>')

def deep_app(request):
    return HttpResponse('<h1>we are a rakib<h1>')
   