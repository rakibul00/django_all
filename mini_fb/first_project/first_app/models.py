from django.db import models

# Create your models here.
class Image(models.Model):
    count = models.IntegerField(primary_key=True)
    photo = models.ImageField(upload_to='myimage')
    date = models.DateTimeField(auto_now=True)
    
    
class Text(models.Model):
    num = models.IntegerField(primary_key=True)
    title = models.CharField(max_length=400)
    text =models.TextField()
    first_at=models.DateTimeField(auto_now_add=True)
    last_at = models.DateTimeField(auto_now=True)
    
    
class Text_photo(models.Model):
    id = models.IntegerField(primary_key=True)
    photo = models.ImageField(upload_to='myimage')
    date = models.DateTimeField(auto_now=True)
    text =models.TextField()