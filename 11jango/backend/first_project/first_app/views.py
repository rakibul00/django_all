from .models import BookStoreModel
from .serializers import BookStoreSerializer
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status


class BookList(APIView):
    """
    List all snippets, or create a new snippet.
    """
    def get(self, request):
        books = BookStoreModel.objects.all()
        serializer = BookStoreSerializer(books, many=True)  # 'many=True' is for the serializer
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = BookStoreSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)