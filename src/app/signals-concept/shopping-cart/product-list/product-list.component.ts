import { Component, inject, OnInit } from '@angular/core';
import { CartService } from '../../cart.service';
import { Product } from '../../../models/product';
import { CommonModule } from '@angular/common';
import { Router,RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule,RouterLink],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit{
  products:Product[]=[];
  cartService = inject(CartService);

  constructor(private routerLink: Router){

  }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    return this.cartService.getProductsFromApi().subscribe((res)=>
    {
      this.products = res;
    });
  }

  addProducttoCart(product:Product){  
    this.cartService.addProductstoCart(product);
  }

}
