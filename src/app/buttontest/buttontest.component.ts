import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttontest',
  imports: [CommonModule],
  templateUrl: './buttontest.component.html',
  styleUrl: './buttontest.component.css'
})
export class ButtontestComponent implements OnInit {
  toggleMessage : string = 'Show Message';
  isShowMessage:boolean = false;
  ngOnInit(): void {
    
  } 
  toggle(){
    if(this.toggleMessage=='Show Message'){
      this.toggleMessage='Hide Message'
      this.isShowMessage=true;

    }
    else{
      this.toggleMessage='Show Message'
      this.isShowMessage=false;
    }
  }
}
