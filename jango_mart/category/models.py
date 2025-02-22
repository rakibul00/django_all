from django.db import models

# Create your models here.
class Category(models.Model):
    category_name = models.CharField(max_length=50, unique=True)
    slug = models.SlugField(max_length=100, unique=True)
    decsription = models.TextField(max_length=255, blank=True)
    cate_img = models.ImageField(upload_to='photos/category', blank=True)
    
    
    def __str__(self) -> str:
        return self.category_name 