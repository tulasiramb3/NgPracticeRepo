import { Component } from '@angular/core';
import { Todo } from '../models/todo';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-arrayspecialoperators',
  imports: [CommonModule],
  templateUrl: './arrayspecialoperators.component.html',
  styleUrl: './arrayspecialoperators.component.css'
})
export class ArrayspecialoperatorsComponent {
  cartItems: Todo[] = [];
  mapCartItems: Todo[] = [];
  todos: Todo[] = [
    { id: 1, description: 'Entertainment', itemName: 'Chess' },
    { id: 2, description: 'Work', itemName: 'Exams' },
    { id: 3, description: 'Food', itemName: 'Fried Rice' },
  ];

  AddtoCart(item: Todo) {
    // this.cartItems.push(item);
    //using spread operator to push an item to array
    this.cartItems = [...this.cartItems, item];
  }

  RemovefromCart(itemId: number) {
    this.cartItems = this.cartItems.filter(item => item.id != itemId)
  }
  RestFunc() {
    //Destructuring arrays 

    var [first, ...remaining] = this.cartItems;
    console.log(first);
    console.log(remaining);
  }

  MapFunc(value: number) {
    this.cartItems = this.cartItems.map(item=>{
      return {
        ...item,
        description : item.description + "$"
      }
    })
    console.log(this.cartItems);
  }

  // /*Rest operator example */
  // functionForRestOperator(values : number[]){
  //   return;
  // }


}
