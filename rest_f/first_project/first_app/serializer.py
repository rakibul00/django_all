from rest_framework import serializers
from .models import BookstoreModel
class SnippetSerializer(serializers.ModelSerializer):
    class Meta:
        model = BookstoreModel
        fields = '__all__'