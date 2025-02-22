from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm,UserChangeForm
from libaray_app.models import AddbookModel,ProfileModel

from django import forms

class RegisterForm(UserCreationForm):
    first_name = forms.CharField(widget=forms.TextInput(attrs={'id':'required'}))
    last_name = forms.CharField(widget=forms.TextInput(attrs={'id':'required'}))
    email = forms.CharField(widget=forms.TextInput(attrs={'id':'required'}))
    class Meta:
        model = User
        fields = ['username', 'first_name', 'last_name', 'email']
        
        
class ChangeUserData(UserChangeForm):
    password = None
    class Meta:
       
        model = User
        fields = ['username', 'first_name', 'last_name', 'email']




class AddbookForm(forms.ModelForm):
    class Meta:
         model = AddbookModel
         fields = ['serial_number','student_roll','deparment','sub_name']         
class ProfileForm(forms.ModelForm):
    class Meta:
        model = ProfileModel
        fields = ['img','about']
        labels = {'photo': ''}