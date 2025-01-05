import { computed, Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { Product } from '../models/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CartItem } from '../models/cartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  api_url : string = 'https://fakestoreapi.com/products'
  // productsCart = signal<Product[]>([]);
  cartItems = signal<CartItem[]>([]);

  totalPrice = computed(()=>
    this.cartItems().reduce((total,item)=> total + item.product.price * item.quantity,0)
  );

  newCartItemId : number = 1;
  constructor(private http:HttpClient) {  
   
  }

  getProductsFromApi() : Observable<Product[]>{
    return this.http.get<Product[]>(this.api_url); 
  }

  addProductstoCart(product : Product){
    // let existingCartItem = this.cartItems().find(item=>item.id===product.id)
    // this.productsCart.set([...this.productsCart(),product]);      
      let existingCartItem  = this.cartItems().find((item)=>item.product.id==product.id)??null;
      if(existingCartItem)
      {
        let updatedItems = this.cartItems().map((item)=>
          item.product.id===product.id?
          {...item, quantity:item.quantity+1}  : item
        )
        this.cartItems.set(updatedItems);
      }
      else{
        let newCartItem : CartItem = {          
          product : product,
          quantity : 1
        }
        this.cartItems.set([...this.cartItems(), newCartItem]);
      }
  }

  removeProductFromCart(id:number){
    // this.productsCart.set(this.productsCart().filter(item=>item.id!=id));
    this.cartItems.set(this.cartItems().filter((item)=>item.product.id!==id));
  }

}
