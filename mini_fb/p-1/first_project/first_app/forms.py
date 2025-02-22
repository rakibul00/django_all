from django import forms
from .models import StudentModel # Make sure this is the model, not a function

class StudentForm(forms.ModelForm):  # Avoid calling this 'Student' to prevent conflicts
    class Meta:
        model = StudentModel
        fields = '__all__' 