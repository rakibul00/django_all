from django.shortcuts import render
from django.http import HttpResponse
from .models import Contact
# Create your views here.
def index(request):
    if request.method == "POST":
        contact = Contact()
        first_name=request.POST.get('firstname')
        last_name=request.POST.get('lastname')
        email=request.POST.get('email')
        contact_number=request.POST.get('contact')
        subject=request.POST.get('subject')
        
        contact.first_name=first_name
        contact.last_name=last_name
        contact.email=email
        contact.contact_number=contact_number
        contact.text=subject 
        contact.save()
        return HttpResponse("<h1>Thanks for your submit</h1>")
        
        
    return render(request,'index.html')