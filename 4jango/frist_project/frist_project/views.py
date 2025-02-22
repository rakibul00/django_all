from django.shortcuts import render

def first_app(request):
    return render(request, 'index.html')
