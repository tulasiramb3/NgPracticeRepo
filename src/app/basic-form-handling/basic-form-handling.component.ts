import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { User } from '../models/user';

@Component({
  selector: 'app-basic-form-handling',
  imports: [FormsModule,CommonModule],
  templateUrl: './basic-form-handling.component.html',
  styleUrl: './basic-form-handling.component.css'
})
export class BasicFormHandlingComponent {
  userModel : User = new User;
  isDisplay : boolean =false;
  constructor() {   
  }

  onFormSubmit(){
    console.log(this.userModel);
    this.isDisplay= true;
  }
}
