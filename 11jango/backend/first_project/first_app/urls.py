from django.urls import path, include
from rest_framework.routers import DefaultRouter

from . import views

# Create a router and register our ViewSets with it.
router = DefaultRouter()
router.register(r'books', views.BookList, basename='book')


# The API URLs are now determined automatically by the router.
urlpatterns = [
    path('books/',views.BookList.as_view()),
]