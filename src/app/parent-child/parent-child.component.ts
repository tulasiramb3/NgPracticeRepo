import { Component, Input } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ChildParentComponent } from '../child-parent/child-parent.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-parent-child',
  imports: [FormsModule,ChildParentComponent,CommonModule],
  templateUrl: './parent-child.component.html',
  styleUrl: './parent-child.component.css'
})
export class ParentChildComponent {
    message : string = '';    
    employeeModel : any = {
    empId :null,
    empName : '',
    empDept:''
  }
  
  isSubmitted = false;

  onFormSubmit(myForm:NgForm){
    this.isSubmitted=true
    this.employeeModel = myForm.value;
    console.log(this.employeeModel);
  }
  reset(myForm:NgForm){
    myForm.reset();
  }

  receiveMessage(data:any){
    console.log('I have received a message from Child Component:'  + data);
    this.message = "Hey, im parent and this is the message recieved from child:" + data;
  }
}
