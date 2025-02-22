from django.shortcuts import render,redirect
from .forms import RegisterForm,ChangeUserData
from django.contrib import messages

from django.contrib.auth.forms import AuthenticationForm,PasswordChangeForm,SetPasswordForm
from django.contrib.auth import authenticate ,login,logout,update_session_auth_hash
from libaray_app.forms import ProfileForm
from libaray_app.models import AddbookModel,ProfileModel
# Create your views here.
def home(request):
    
    return render(request, 'home.html')


def singup(request):
     if request.method == 'POST':
        form = RegisterForm(request.POST)
        if form.is_valid():
            messages.success(request,'Account created successfully')
            form.save()       
            print(form.cleaned_data)
            return redirect('login')
     else:
        form = RegisterForm()
     return render(request,'./singup.html',{'form':form})

def login_page(request):
     if request.method == 'POST':
        form = AuthenticationForm(request=request, data = request.POST)
        if form.is_valid():
           name = form.cleaned_data['username']
           userpass = form.cleaned_data['password']
           user = authenticate(username = name,password = userpass)
           if user is not None:
              login(request,user)
              return redirect('profile')
           if user is not None:
            login(request, user)
            messages.success(request, "Login successful!")
            
        else:
            messages.error(request, "Invalid username or password.")
     else:
        form = AuthenticationForm()
     return render(request,'./login.html',{'form':form})


def user_logout(request):
    logout(request)
    return redirect('login')



def profile(request):
     profile = ProfileModel.objects.all()
     return render(request,'./profile.html',{'profile':profile})
    # if request.user.is_authenticated:
    #     if request.method == 'POST' :
    #         form = ChangeUserData(request.POST, instance = request.user)
    #         if form.is_valid():
    #             messages.success(request, 'Account updated successfully')
    #             form.save()
    #             print(form.cleaned_data)
    #     else:
    #         form = ChangeUserData(instance = request.user)
    #     return render(request,'./profile.html',{'form': form})
    # else: 
    #     return redirect( 'signup')
    


def addbook(request):
   addbook=AddbookModel.objects.all()
   print(addbook)
   return render(request,'./addbook.html',{'book':addbook})


def edit_profile(request):
   
   if request.method == 'POST':
      form = ProfileForm(request.POST, request.FILES)
      if form.is_valid():
         form.save()
         return redirect('profile')
   form = ProfileForm()
   return render(request,'edit_profile.html',{'profile':form})