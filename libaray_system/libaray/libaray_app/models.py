from django.db import models

# Create your models here.

class AddbookModel(models.Model):
     serial_number = models.IntegerField(primary_key=True)
     student_roll = models.CharField(max_length=50, unique=True)
     name = models.CharField(max_length=255, null=True, blank=True)
     deparment = models.CharField(max_length=100)
     sub_name = models.CharField(max_length=100)
     first_pub = models.DateTimeField(auto_now_add=True)
     last_pub = models.DateTimeField(auto_now=True)
     
     def __str__(self):
        return f"{self.student_roll} - {self.deparment}"


class ProfileModel(models.Model):
   about=models.CharField(max_length=1000,null=True,blank=True)
   img =models.ImageField(upload_to='profile_img')