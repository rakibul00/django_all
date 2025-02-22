from django.contrib import admin
from .models import UserBankAccont, UserAddress
# Register your models here.
admin.site.register(UserBankAccont)
admin.site.register(UserAddress)