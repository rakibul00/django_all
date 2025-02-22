from django.db import models

# Create your models here.

class BookstoreModel(models.Model):
    CATEGORY =(
        ('mystory', 'mystory'),
        ('physices', 'physices'),
        ('bangla', 'bangla'),
        ('math', 'math')
    )
    id = models.IntegerField(primary_key=True)
    book_name = models.CharField(max_length=30)
    author = models.CharField(max_length=30)
    category =models.CharField(max_length=30, choices=CATEGORY)
    first_pub =models.DateTimeField(auto_now_add=True)
    last_pub = models.DateTimeField(auto_now=True)