from django.db import models

# Create your models here.
class Contact(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=50)
    email = models.EmailField()
    contact_number = models.IntegerField()
    text = models.TextField(null=True, blank=True)
    
    def __str__(self):
        return self.first_name