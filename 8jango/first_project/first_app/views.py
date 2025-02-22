from django.shortcuts import render, redirect
from . import models
# Create your views here.

def home(request):
    student = models.Student.objects.all()
    #print(student)
    return render(request,'index.html' ,{'data':student})


def delete_stydent(request,roll):
    std = models.Student.objects.get(pk = roll).delete()
    #student = models.Student.objects.all()
    #print(std)
    return redirect('home')

    #return(std)