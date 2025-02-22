from django.shortcuts import render

# Create your views here.
from .models import ProductReview , Product
from .serializers import SnippetSerializer ,SnippetSerializerr
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status


from rest_framework import viewsets


class UserViewSet(viewsets.ModelViewSet):
    """
    This viewset automatically provides `list` and `retrieve` actions.
    """
    queryset = Product.objects.all()
    serializer_class = SnippetSerializer
    
    
class UserViewSett(viewsets.ModelViewSet):
    """
    This viewset automatically provides `list` and `retrieve` actions.
    """
    queryset = Product.objects.all()
    serializer_class = SnippetSerializerr