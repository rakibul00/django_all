from django.contrib import admin
from .models import Image,Text,Text_photo
# Register your models here.
admin.site.register(Image)
class ImageAdmin(admin.ModelAdmin):
    list_display = ['id', 'photo', 'date']
    
admin.site.register(Text)

admin.site.register(Text_photo)
class Photo_textdmin(admin.ModelAdmin):
    list_display = ['id', 'photo', 'date','text']