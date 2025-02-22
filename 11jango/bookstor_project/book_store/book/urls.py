from django.urls import path
from book.views import home,store_book,show_book,edit_book,delet_book
urlpatterns = [
    
    path('',home ),
    path('store_new_book/',store_book, name='storebook'),
    path('show_book/',show_book, name='showbook'),
    path('edit_book/<int:id>',edit_book, name='edit_book'),
     path('delet_book/<int:id>',delet_book, name='delet_book'),
]










