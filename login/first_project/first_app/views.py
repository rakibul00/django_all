from django.shortcuts import render,redirect
from .forms import RegisterForm
from django.contrib.auth.forms import AuthenticationForm
from django.contrib.auth import authenticate, login, logout
# Create your views here.
def home(request):
    return render(request,'home.html')

def singup(request):
    if request.method == 'POST':
       form = RegisterForm(request.POST)
       if form.is_valid():
           form.save()
           print(form.changed_data)
           return redirect('homepage')
    else:
        form = RegisterForm()
    return render(request,'singup.html', {'from':form})


def user_login(request):
    if request.method == 'POST':
        form = AuthenticationForm(request=request,data = request.POST)
        if form.is_valid():
            name = form.cleaned_data['username']
            userpass = form.cleaned_data['password']
            user = authenticate(username =name,password=userpass)
            if user is not None:
                login(request,user)
                return redirect('profile')
    else:
        form = AuthenticationForm()
    return render(request,'./login.html', {'from':form})
    
    
def profile(request):
   if request.user.is_authenticated:
       return render(request,'profile.html',{'user':request.user})
   else:
        return redirect('login')


def user_logout(request):
    logout(request)
    return redirect('login')