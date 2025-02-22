from django.db import models

# Create your models here.
class StudentModel(models.Model):
    roll = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=20)
    father_name =models.CharField(max_length=30)
    address = models.TextField()
    
    def __str__(self):
        return f"Nmae : {self.name} - Roll : {self.roll}"

class CommonInfoClass(models.Model):
     name = models.CharField(max_length=20)
     city = models.CharField(max_length=20)
     class Meta:
         abstract = True
    
class StudentInfoModel(CommonInfoClass): 
      
      payment =models.IntegerField()
      section = models.CharField(max_length=20)


class EmployeModel(models.Model):
    name = models.CharField(max_length=20)
    dep = models.CharField(max_length=10)
    salary = models.IntegerField()
    
class ManagerModel(EmployeModel):
    visit = models.CharField(max_length=30)
    