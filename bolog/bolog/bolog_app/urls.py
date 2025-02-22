from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
   
    path('register/',views.register, name='register'),
    path('login/', views.user_login, name='login'),
    path('logout/', views.user_logout, name='logout'),
    path('post/', views.post_image, name='post_image'),
    path('profile/', views.profile, name='profile'),
    path('passchange/', views.pass_change, name='passchange'),
    path('changeprofile/',views.change_user_data, name='changeprofile'),



    
]
