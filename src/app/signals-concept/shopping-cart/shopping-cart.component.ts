import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-shopping-cart',
  imports: [FormsModule,ProductListComponent],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css'
})
export class ShoppingCartComponent {
  cart = {id:1, quantity:1}


}
