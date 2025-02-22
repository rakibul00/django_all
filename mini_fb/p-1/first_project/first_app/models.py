from django.db import models

# Create your models here.
class Student(models.Model):
    roll = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=20)
    group = models.CharField(max_length=10,blank=True)
    address = models.TextField()
    
    def __str__(self) -> str:
        return f"Name: {self.name} - {self.group}"
    
    
class StudentModel(models.Model):
    
    name = models.CharField(max_length=20)
    id = models.IntegerField(primary_key=True)
    father_name = models.CharField(max_length=10)
    group = models.CharField(max_length=10)
    deparment = models.CharField(max_length=30)
    address = models.CharField(max_length=20)
    
    def __str__(self) -> str:
        return f"name:{self.name} - {self.deparment}"