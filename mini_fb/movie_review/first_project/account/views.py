from django.shortcuts import render,redirect
from django.contrib.auth.models import User
from account.forms import SingupForm , LoginForm 
from django.contrib.auth.forms import AuthenticationForm
from django.contrib.auth import login,authenticate,logout
from django.db import IntegrityError
# Create your views here.

def LogIn(request):
    if request.method == 'GET':
           return render(request,'singup.html',{'form': LoginForm()})
    
    else:
         user = authenticate(request, username= request.POST['username'],
                             password=request.POST['password'])
        
         if user is None:
             return render(request, 'login.html',{'form': LoginForm(), 'error':"password or username dose not match"})
         else:
             login(request,user)
             return redirect('home')
             


def singup(request):
    if request.method == 'GET':
       return render(request,'singup.html',{'form':SingupForm()})
    
    else:
        if request.POST['password1'] == request.POST['password2']:
            try:
                user =User.objects.create_user(username=request.POST['username'],
                                           password=request.POST['password1'])
                user.save()
                login(request,user)
                return redirect('home')
            except IntegrityError:
                 return render(request, 'singup.html',{'form':SingupForm(), 'error':"An account already exisis with this username"})
                
        else:
            return render(request, 'singup.html',{'form':SingupForm(), 'error':"password didn't match"})
            
            
def logoutAccount(request):
    logout(request)
    return redirect('home')