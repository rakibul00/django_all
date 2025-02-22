from django import forms
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm, UserChangeForm
from .models import Post

class RegisterForm(UserCreationForm):
    class Meta:
        model = User
        fields = ['username', 'email', 'password1', 'password2']

class PostForm(forms.ModelForm):
    class Meta:
        model = Post
        fields = ['image', 'title', 'caption']




class ChangeUserData(UserChangeForm):
    password = None
    class Meta:
       
        model = User
        fields = ['username', 'first_name', 'last_name', 'email']