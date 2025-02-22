from django.shortcuts import render,redirect
from django.http import HttpResponse
from .models import Text_photo

from .forms import RegisterForm,ChangeUserData
from django.contrib import messages
from .forms import ImageForm,TextFrom,Text_photoForm
from .models import Image,Text,Text_photo
from django.contrib.auth.forms import AuthenticationForm
from django.contrib.auth.forms import AuthenticationForm
from .forms import CustomPasswordChangeForm
from django.contrib.auth import authenticate ,login,logout,update_session_auth_hash
# Create your views here.
def base(request):
    return render(request,'base.html')


def user_singup(request):
    if request.method == 'POST':
       form = RegisterForm(request.POST)
       if form.is_valid():
           form.save()
           print(form.changed_data)
           return redirect('login')
    else:
        form = RegisterForm()
    return render(request,'./singup.html', {'from':form})


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
       img = Image.objects.all()
       text = Text.objects.all()
       text_img = Text_photo.objects.all()
       return render(request,'profile.html',{'user':request.user,'img':img,'textt':text,'tp':text_img})
   
   else:
        return redirect('login')
    
    

    
    
    
def user_logout(request):
    logout(request)
    return redirect('login')



def pass_change2(request):
    if request.method == 'POST':
        form =CustomPasswordChangeForm(user=request.user, data = request.POST)
        if form.is_valid():
           
            update_session_auth_hash(request, request.user)
            messages.success(request, 'Your password updated successfully')
            form.save()
            print(form.cleaned_data)
    else:
        form = CustomPasswordChangeForm(user=request.user)
    return render(request,'./passchange.html',{'form':form})



            
def change_profile(request):
    if request.user.is_authenticated:
        if request.method == 'POST' :
            form = ChangeUserData(request.POST, instance = request.user)
            if form.is_valid():
                messages.success(request, 'Your Profile updated successfully')
                form.save()
                print(form.cleaned_data)
        else:
            form = ChangeUserData(instance = request.user)
        return render(request,'./change_profile.html',{'form': form})
    else: 
        return redirect( 'signup')
    
    
def uplode_img(request):
    if request.method == 'POST':
        form = ImageForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            return redirect('profile')
    form = ImageForm()
    
    return render(request,'uplodeimg.html', {'form':form})


def textt(request):
     if request.method == 'POST':
        form = TextFrom(request.POST)
        if form.is_valid():
            form.save()
            return redirect('profile')
     form = TextFrom()
     
    
     return render(request,'text.html', {'text':form,})
        
def photo_text(request):
    if request.method == 'POST':
        form = Text_photoForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            return redirect('profile')
    form = Text_photoForm()
    
    return render(request,'text_photo.html', {'formm':form})
    
    
    
    
    

   
def delet_text(request, num):
    text = Text.objects.get(pk = num).delete()
    return redirect('profile')


def delet_image(request, count ):
    photo = Image.objects.get(pk= count).delete()
    return redirect('profile')

def delet_taximg(request,id):
    teximg = Text_photo.objects.get(pk=id).delete()
    return redirect('profile')
    
    
    
def edit_text(request,num):
    text = Text.objects.get(pk = num)
    form = TextFrom(instance = text)
    if request.method == 'POST':
        form = TextFrom(request.POST,instance = text)
        if form.is_valid():
           form.save()
           return redirect('profile')
    return render(request,'./text.html',{'text':form})

def edit_image(request,count):
    img = Image.objects.get(pk = count)
    form = ImageForm(instance = img)
    if request.method == 'POST':
        form = ImageForm(request.POST, request.FILES,instance = img)
        if form.is_valid():
           form.save()
           return redirect('profile')
    return render(request,'./uplodeimg.html',{'form':form})

def edit_taximg(request,id):
    timg = Text_photo.objects.get(pk = id)
    form = Text_photoForm(instance = timg)
    if request.method == 'POST':
        form = TextFrom(request.POST, request.FILES,instance = timg)
        if form.is_valid():
           form.save()
           return redirect('profile')
    return render(request,'./text_photo.html',{'formm':form})