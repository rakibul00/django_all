from django.shortcuts import render

# Create your views here.
def order(request):
    return render(request,'orders/order_complete.html')