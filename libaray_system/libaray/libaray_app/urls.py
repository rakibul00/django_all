from django.urls import path

from . import views
urlpatterns = [
    
    path('',views.home,name='home'),
    path('singup/',views.singup,name='singup'),
    path('login/',views.login_page,name='login'),
    path('profile/', views.profile, name='profile'),
    path('logout/', views.user_logout, name='logout'),
    path('addbook/', views.addbook, name='addbook'),
    path('edit_profile/', views.edit_profile, name='edit_profile'),
  
]



