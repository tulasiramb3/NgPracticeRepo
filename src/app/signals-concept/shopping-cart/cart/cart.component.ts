import { Component, inject, OnInit } from '@angular/core';
import { CartService } from '../../cart.service';
import { Product } from '../../../models/product';
import { CartItem } from '../../../models/cartItem';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart',
  imports: [CommonModule,FormsModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{
  // cartItems : Product[] =[]
  cartService = inject(CartService);
  cartItems:CartItem[]=[];
  totalPrice : number = 0;
  ngOnInit(): void {
    this.getCartItems();
    
    // this.cartItems.forEach((item)=>console.log(item));
  }

  getCartItems(){
    // this.cartItems = this.cartService.productsCart();
    // this.cartItems.forEach(item=>{
    //   this.totalPrice = item.price + this.totalPrice
    // });

    this.cartItems = this.cartService.cartItems();
    this.totalPrice = this.cartService.totalPrice();
  }

  removeProduct(productId: number){
    this.cartService.removeProductFromCart(productId);
    this.getCartItems();
  }

  quantityChange(cart : CartItem, val: number){
   let updatedCartItems = this.cartService.cartItems().map(item=>{
      return item.product.id === cart.product.id?
        {...item, quantity: val } : item
    })
    this.cartService.cartItems.set(updatedCartItems)
    this.getCartItems();
  }
}
