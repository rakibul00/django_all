from django.shortcuts import render,redirect
from book.forms import BookStoreForm
from book.models import BookStoreModel

# Create your views here.
def home(request):
    return render(request, 'store_book.html')

def store_book(request):
    if request.method == 'POST':
        book = BookStoreForm(request.POST)
        if book.is_valid():
           print(book.cleaned_data)
           book.save()
           return redirect('showbook')
    else:
        book = BookStoreForm()
    return render(request,'store_book.html',{'form' :book})

def show_book(request):
    book = BookStoreModel.objects.all()
    print(book)
    return render(request,'show_book.html', {'data':book})

def edit_book(request,id):
    book = BookStoreModel.objects.get(pk = id)
    form = BookStoreForm(instance = book)
    if request.method == 'POST':
        form = BookStoreForm(request.POST,instance = book)
        if form.is_valid():
           form.save()
           return redirect('showbook')
    return render(request,'store_book.html',{'form' :form})
    
def delet_book(request,id):
    book = BookStoreModel.objects.get(pk = id).delete()
    return redirect('showbook')
        
    