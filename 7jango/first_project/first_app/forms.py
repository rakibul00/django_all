from  django import forms

class contactForm(forms.Form):
    name = forms.CharField(label='user name')
    email = forms.EmailField(label='user email')
    #age = forms.IntegerField(label='user ag')
    #images = forms.FileField
    #weight = forms.FloatField()
    #balance = forms.DecimalField()
    #chack = forms.BooleanField()
    #birthday = forms.DateField(widget=forms.DateInput(attrs={'type':'date'}))
    #Ch =[('S', 'Small'),('M','Mediam',),('L','Large')]
    #Size = forms.ChoiceField(choices=Ch)
    #file = forms.FileField
    #num= forms.IntegerField()
    #food=[('P','Pzza'),('B','Bugger'),('M','Midmachin')]
    #Food =forms.ChoiceField(choices=food, widget=forms.RadioSelect)
    
    
#class Studentdata(forms.Form):
    #name = forms.CharField(widget=forms.TimeInput)
    #email = forms.EmailField(widget=forms.EmailInput)
   # def clean_name(self):
     # valname = self.cleaned_data['name']
     # if len(valname) < 10:
         # raise forms.ValidationError('Enter a name with 7 characters')
      #return valname
    
    
   # def clean_email(self):
     # valemail = self.cleaned_data['email']
     # if '.com' not in valemail:
          #raise forms.ValidationError('Enter a email must be .com')
     # return valemail
  
  
    
class Studentdata(forms.Form):
    name = forms.CharField(widget=forms.TimeInput)
    passwrd = forms.CharField(widget=forms.PasswordInput)
    confirm_pass = forms.CharField(widget=forms.PasswordInput)
    
    
    def clean(self):
        val_pass = self.cleaned_data['passwrd']
        val_conpass = self.cleaned_data['confirm_pass']
        val_name = self.cleaned_data['name']
        if val_conpass != val_pass:
            raise forms.ValidationError("pass doesn't match")
        if len(val_name) < 7:
            raise forms.ValidationError('name must be 15 cheracters')
        
    