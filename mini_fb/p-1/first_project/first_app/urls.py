
from django.urls import path
from .import views

urlpatterns = [
    path('',views.base,name=""),
    path('home/',views.home,name="homepage"),
    path('login/',views.login,name="login"),
    path('edit/<int:id>',views.edit,name="edit"),
    path('delet/<int:id>',views.delet_student,name="delet_student"),
]