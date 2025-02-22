from django import forms
from book.models import BookStoreModel

class BookStoreForm(forms.ModelForm):
    class Meta:
        model = BookStoreModel
        fields = ['id','book_name','author','category']
        #excludu = ['first_pub','last_pub']