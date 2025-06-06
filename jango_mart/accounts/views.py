from django.shortcuts import render,redirect
from .forms import RegisterForm
from django.contrib.auth.forms import AuthenticationForm
from cart.models import Cart, CartItem
import uuid 
from django.contrib.auth import authenticate, login, logout
# Create your views here.


def register(request):
    if request.method == 'POST':
       form = RegisterForm(request.POST)
       if form.is_valid():
           form.save()
           print(form.changed_data)
           return redirect('login')
    else:
        form = RegisterForm()
    return render(request,'accounts/register.html',{'form':form})



    


def user_logout(request):
    logout(request)
    return redirect('login')



def profile(request):
    return render(request,'accounts/dashboard.html')


def user_login(request):
    if request.method == 'POST':
        form = AuthenticationForm(request=request,data = request.POST)
        if form.is_valid():
            name = form.cleaned_data['username']
            userpass = form.cleaned_data['password']
            user = authenticate(username =name,password=userpass)
        #   ekhono loggin hoy nai
            session_id = request.session.get('session_id')
            cart = Cart.objects.get(cart_id = session_id)
            is_cart_item_exists = CartItem.objects.filter(cart = cart).exists()
            if is_cart_item_exists:
               cart_item = CartItem.objects.filter(cart = cart)
               for item in cart_item:
                 item.user = user
                 item.save()
            login(request,user)
            return redirect('profile')
    else:
        form = AuthenticationForm()
    return render(request,'accounts/signin.html',{'form':form})


















from django.shortcuts import render,redirect,get_object_or_404
from store.models import Product
from cart.models import Cart, CartItem
from django.contrib.auth.forms import AuthenticationForm
import uuid  # For generating universally unique identifiers (UUIDs)
from django.contrib import messages
# Create your views here.


def cart(request):
     cart_item = None
     tax =0
     total =0
     grand_total = 0
     if request.user.is_authenticated:
         cart_items = CartItem.objects.filter(user = request.user)
         for item in cart_items:
             total += item.product.price * item.quentity
     
     else:
        session_id = request.session.get('session_id')
        cart_id = Cart.objects.filter(cart_id = session_id).exists()
       
        cartid = Cart.objects.get(cart_id = session_id)
            
 
        if cart_id:
    
          cart_item = CartItem.objects.filter(cart = cartid)
        #  print(cart_item)
          for item in cart_item:
            total += item.product.price * item.quentity
     tax = (2*total)/100
     grand_total = total + tax
      
     return render(request, 'cart/cart.html', {'cart_item':cart_item,'total':total,'tax':tax,'grand_total':grand_total,})





def add_to_cart(request, product_id):
    product = Product.objects.get(id=product_id)
    session_id = request.session.get('session_id', None)
    if not session_id:
        session_id = str(uuid.uuid4())
        request.session['session_id'] = session_id # session id ke ber kore anlam
        print('hello',request.session)

    if request.user.is_authenticated:
     
        # logged in
        cart_item = CartItem.objects.filter(product=product, user = request.user).exists()
        if cart_item:
            item = CartItem.objects.get(product=product)
            item.quentity += 1
            item.save()
        else :
            cartid = Cart.objects.get(cart_id = session_id)
            item = CartItem.objects.create(
                cart = cartid,
                product = product,
                quantity = 1,
                user = request.user
            )
            item.save()
    else:
      
       
        cart_id = Cart.objects.filter(cart_id = session_id).exists() # session id wala kono cart id ache kina check kortechi,Thakle True dibe naile False
        if cart_id: # jodi cart id thake 
            cartid = Cart.objects.get(cart_id = session_id)
            cart_item = CartItem.objects.filter(product=product, cart = cartid).exists()
            if cart_item:
                item = CartItem.objects.get(product=product, cart= cartid)
                item.quentity += 1
                item.save()
            else :
                cartid = Cart.objects.get(cart_id = session_id)
                print("adfasdf ", cartid, session_id)
                item = CartItem.objects.create(
                    cart = cartid,
                    product = product,
                    quentity =1
                   
                )
                item.save()
        else:
            cart = Cart.objects.create(
            cart_id = session_id
            )
            cart.save()
            
            
            
    
    return redirect('cart')

