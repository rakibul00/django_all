from django.shortcuts import render
from first_app.froms import StudentFrom
from . import views
# Create your views here.
def home(request):
   if request.method == 'POST':
         form = StudentFrom(request.POST)
         if form.is_valid():
           form.save()
           print(form.cleaned_data)
   else:
        form = StudentFrom()
  
   return render(request,'home.html',{'from':form})