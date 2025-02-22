from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Movie(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    image= models.ImageField(upload_to='first_app/images/')
    url = models.URLField(blank=True)
    
    
    def __str__(self) -> str:
        return self.title
    
class Review(models.Model):
    text = models.CharField(max_length=400)
    date = models.DateTimeField(auto_now=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    movie = models.ForeignKey(Movie, on_delete=models.CASCADE)
    watchAgin = models.BooleanField(default=False)
    
    
    def __str__(self) -> str:
        return self.text