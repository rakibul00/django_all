from django.db import models
from store.models import Product
from django.contrib.auth.models import User
# Create your models here.
class Cart(models.Model):
    cart_id = models.CharField(max_length=250, blank=True,null=False)
    date_added = models.DateTimeField(auto_now_add=True)
 

    
    
    def __str__(self) -> str:
        return self.cart_id
    
    
class CartItem(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE,  null=True,)

    cart = models.ForeignKey(Cart, on_delete=models.CASCADE, null=True)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quentity = models.IntegerField(default=1)
    is_active = models.BooleanField(default=True)

    
    
    def __str__(self):
        return f"{self.quentity} x {self.product.product_name} in {self.cart.cart_id}"

    
    def sub_total(self):
        return self.product.price * self.quentity
   
    