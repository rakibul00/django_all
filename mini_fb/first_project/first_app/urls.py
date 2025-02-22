
from django.urls import path
from .import views

urlpatterns = [
   path('',views.base,name='base'),
   path('singup/',views.user_singup,name='singup'),
   path('login/',views.user_login,name='login'),
   path('profile/',views.profile,name='profile'),
   path('logout/',views.user_logout,name='logout'),
   path('changeprofile/', views.change_profile, name='changeprofile'),
   path('passchange/', views.pass_change2, name='passchange'),
   path('uplodeimg/', views.uplode_img, name='uplodeimg'),
   path('text/', views.textt, name='text'),
   path('text_photo/', views.photo_text, name='text_photo'),
   path('delet_text/<int:num>',views.delet_text, name='delet_text'),
   path('delet_image/<int:count>',views.delet_image, name='delet_image'),
   path('delet_taximg/<int:id>',views.delet_taximg, name='delet_taximg'),
   path('edit_text/<int:num>',views.edit_text, name='edit_text'),
   path('edit_image/<int:count>',views.edit_image, name='edit_image'),
   path('edit_taximg/<int:id>',views.edit_taximg, name='edit_taximg'),
  
]
