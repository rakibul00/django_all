from rest_framework import serializers
from .models import Product ,ProductReview
class SnippetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'
        
class SnippetSerializerr(serializers.ModelSerializer):
    class Meta:
        model = ProductReview
        fields = '__all__'