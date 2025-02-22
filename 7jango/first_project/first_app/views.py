from django.shortcuts import render
from . forms import contactForm
from . forms import Studentdata
# Create your views here.

def home(request):
    return render(request,'./first_app/home.html')


def about(request):
    return render(request,'./first_app/about.html')

def submit_form(request):
    if request.method == 'POST':
     print(request.POST)
     name = request.POST.get('userName')
     email = request.POST.get('userEmail')
     select = request.POST.get('select')
     return render(request,'./first_app/form.html', {'name':name, 'email':email,'select':select})
    else:
     return render(request,'./first_app/form.html')
 
def DjangoForm(request):
    #if request.method == 'POST':
     form = contactForm(request.POST)
     if form.is_valid():
         #file = form.cleaned_data['file'] ///(image add uplod file code)
         #with open("./first_app/uolod/" + file.name, 'wb+') as desta:
             #for chunk in file.chunks():
                 #desta.write(chunk)
         print(form.cleaned_data)
     return render(request,'./first_app/django_form.html', {'form' :form})
    #else:
        # form = contactForm()
         #return render(request,'./first_app/django_form.html', {'form' :form})
         
         
def StudentForm(request):
    if request.method == 'POST':
     form = Studentdata(request.POST)
     if form.is_valid():
         print(form.cleaned_data)
    else:
        form = Studentdata()
    return render(request,'./first_app/student_form.html', {'form' :form})
    