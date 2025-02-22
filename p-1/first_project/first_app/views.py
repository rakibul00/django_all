from django.shortcuts import render,redirect
from .forms import StudentForm 
from .models import StudentModel
from . import models
# Create your views here.
def home(request):
    student = models.StudentModel.objects.all()
    return render(request,"home.html",{'data':student})


def delet_student(request,id):
    std = models.StudentModel.objects.get(pk=id).delete()
    return redirect("homepage")
  
  
def login(request):
    if request.method == 'POST':
        form = StudentForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('homepage')
    else:
        form = StudentForm()
    form = StudentForm ()  # Ensure you're instantiating the form correctly
    return render(request, 'login.html', {'form': form})
    

def edit(request, id):
    student = StudentModel.objects.get(pk=id)
    if request.method == 'POST':
        form = StudentForm(request.POST, instance=student)
        if form.is_valid():
            form.save()
            return redirect('homepage')
    else:
        form = StudentForm(instance=student)
    
    return render(request, 'login.html', {'form': form})

   
def base(request):
    return render(request,'base.html')