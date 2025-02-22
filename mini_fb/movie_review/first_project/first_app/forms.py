from django.forms import ModelForm
from first_app.models import Review
class ReviewForm(ModelForm):
    def __init__(self,*args,**kwargs):
        super(ModelForm,self).__init__(*args,**kwargs)
        self.fields['text'].widget.attrs.update({'class':'form-control'})
        self.fields['watchAgin'].widget.attrs.update({'class':'form-check-inout'})
        
    class Meta:
        model = Review
        fields = ['text', 'watchAgin']
        
        #  widgets = {
        #     'text': Textarea(attrs={'row':4})
        # }