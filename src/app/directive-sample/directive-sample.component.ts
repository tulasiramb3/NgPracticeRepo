import { Component } from '@angular/core';
import { Todo } from '../models/todo';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-directive-sample',
  imports: [CommonModule],
  templateUrl: './directive-sample.component.html',
  styleUrl: './directive-sample.component.css'
})
export class DirectiveSampleComponent {
  todos: Todo[] = []; 
  showItems:boolean = true;
  constructor() {
    this.todos = [
      { id: 1, itemName: 'Apple', description: 'it is a fruit' },
      { id: 2, itemName: 'Carrot', description: 'it is a vegetable' },
      { id: 3, itemName: 'sambar', description: 'it is a curry' }
    ]
  }

  showTodos(){    
    this.showItems=!this.showItems;
  }
}
