from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('singup/', views.singup, name='singup'),
    path('login/', views.loginn, name='login'),
    path('logout/', views.user_logout, name='logout'),
    path('passchange/', views.pass_change, name='passchange'),
    #path('passchange2/', views.pass_change2, name='passchange2'),
    path('profile/', views.profile, name='profile'),
    path('changeprofile/', views.change_profile, name='changeprofile'),
]
