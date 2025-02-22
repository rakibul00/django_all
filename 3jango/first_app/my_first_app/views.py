from django.shortcuts import render


from django.http import HttpResponse

def home(request):
    return HttpResponse("Welcome to my first app!")

def about(request):
    return HttpResponse("Welcome to my about page!")