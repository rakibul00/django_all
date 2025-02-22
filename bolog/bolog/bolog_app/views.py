from django.shortcuts import render, redirect

from django.contrib import messages

from django.contrib.auth.forms import AuthenticationForm
from .forms import RegisterForm, PostForm, ChangeUserData
from .models import Post
from django.contrib.auth.models import User




from django.contrib import messages

from django.contrib.auth.forms import AuthenticationForm,PasswordChangeForm,SetPasswordForm,UserChangeForm
from django.contrib.auth import authenticate ,login,logout,update_session_auth_hash






def navbar(request):
    context = {}
    if request.user.is_authenticated:
        context['profile'] = request.user.profile 

    return render(request, 'navbar.html',context)

def home(request):
     # Get all user profiles
    posts = Post.objects.all().order_by('-created_at')
    return render(request, 'home.html', {'posts': posts,})

def register(request):
   if request.method == 'POST':
        form = RegisterForm(request.POST)
        if form.is_valid():
            messages.success(request,'Account created successfully')
            form.save()       
            print(form.cleaned_data)
          
   else:
        form = RegisterForm()
   return render(request,'register.html',{'form':form})

def user_login(request):
    if request.method == 'POST':
        form = AuthenticationForm(data=request.POST)
        if form.is_valid():
            user = form.get_user()
            login(request, user)
            return redirect('home')
    else:
        form = AuthenticationForm()
    return render(request, 'login.html', {'form': form})

def user_logout(request):
    logout(request)
    return redirect('home')

def post_image(request):
    if request.method == 'POST':
        form = PostForm(request.POST, request.FILES)
        if form.is_valid():
            post = form.save(commit=False)
            post.user = request.user
            post.save()
            return redirect('home')
    else:
        form = PostForm()
    return render(request, 'post_img.html', {'form': form})



def profile(request):
 if request.user.is_authenticated:

  

    if request.user.is_authenticated:
        posts = Post.objects.filter(user=request.user)  # Show only the logged-in user's posts
    else:
        posts = None  # Or redirect to login page if needed
    return render(request, 'profile.html',{'profile': profile, 'posts': posts})

 else:
    return redirect('login')


def change_user_data(request):
    if request.user.is_authenticated:
        if request.method == 'POST' :
            form = ChangeUserData(request.POST, instance = request.user)
            if form.is_valid():
                messages.success(request, 'Account updated successfully')
                form.save()
                print(form.cleaned_data)
        else:
            form = ChangeUserData()
        return render(request,'change_profile.html',{'form': form})
    else: 
        return redirect( 'profile')
    
    
    
    
def pass_change(request):
 if request.user.is_authenticated:
    if request.method == 'POST':
        form = PasswordChangeForm(user=request.user, data = request.POST)
        if form.is_valid():
            update_session_auth_hash(request, request.user)
            messages.success(request, 'Passwordt updated successfully')
            form.save()
            return redirect('home')
    else:
        form = PasswordChangeForm(user=request.user)
    return render(request,'./passchange.html',{'form':form})
 else:
        return redirect('login')

