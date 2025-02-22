from django.contrib.auth.forms import AuthenticationForm
from django.contrib.auth.forms import UserCreationForm

class SingupForm(UserCreationForm):
    def __init__(self, *args, **kwargs):
        super(UserCreationForm, self).__init__(*args, **kwargs)
          
        for  fields in ('username', 'password1', 'password2'):
            self.fields[fields].help_text =None
            self.fields[fields].widget.attrs.update({'class':'form-control'})
           
       

class LoginForm(AuthenticationForm):
    def __init__(self, *args, **kwargs):
        super(AuthenticationForm, self).__init__(*args, **kwargs)
          
        for  fields in ('username',  'password'):
            self.fields[fields].help_text =None
            self.fields[fields].widget.attrs.update({'class':'form-control'})
           
       

