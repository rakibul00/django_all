from django.shortcuts import render

# Create your views here.
def contact(request):
    return render(request,'./first_app/home.html')

def about(request):
    return render(request,'./first_app/about.html')