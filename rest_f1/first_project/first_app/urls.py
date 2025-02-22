from django.urls import path, include
from rest_framework.routers import DefaultRouter

from  .import views

# Create a router and register our ViewSets with it.
router = DefaultRouter()
router.register(r'snippet', views.UserViewSet, basename='snippet'),
router = DefaultRouter()
router.register(r'snippett', views.UserViewSett, basename='snippett')



# The API URLs are now determined automatically by the router.
urlpatterns = [
   
    path('',include(router.urls)),
]