from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm,UserChangeForm,PasswordChangeForm
from django.contrib.auth.forms import PasswordChangeForm
from django import forms
from .models import Image,Text,Text_photo
class RegisterForm(UserCreationForm):
    class Meta:
        model = User
        fields = ['username','first_name','last_name','email','password1','password2']
        
        
class ChangeUserData(UserChangeForm):
    password = None
    class Meta:
       
        model = User
        fields = ['username', 'first_name', 'last_name', 'email']

class CustomPasswordChangeForm(PasswordChangeForm):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        # Optional customizations, if needed
        
        
class ImageForm(forms.ModelForm):
    class Meta:
        model = Image
        fields = '__all__'
        labels = {'photo': ''}
        
class TextFrom(forms.ModelForm):
    class Meta:
        model =Text
        fields = "__all__"

class Text_photoForm(forms.ModelForm):
    class Meta:
        model = Text_photo
        fields = '__all__'
        labels = {'photo': ''}