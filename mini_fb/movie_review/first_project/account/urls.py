from django.urls import path
from account import views
urlpatterns = [
    path('login/',views.LogIn,name='login'),
    path('singup/',views.singup,name='singup'),
    path('logout/',views.logoutAccount,name='logout')
]
