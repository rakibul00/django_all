from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.
def blogs1(request):
    return HttpResponse('hello every one')
