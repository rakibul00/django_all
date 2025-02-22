from django.contrib import admin
from first_app.models import StudentModel,StudentInfoModel #TeacgerInfoModel

# Register your models here.

admin.site.register(StudentModel)
admin.site.register(StudentInfoModel)
#admin.site.register(TeacgerInfoModel)
