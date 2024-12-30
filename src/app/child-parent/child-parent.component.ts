import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-parent',
  imports: [CommonModule],
  templateUrl: './child-parent.component.html',
  styleUrl: './child-parent.component.css'
})
export class ChildParentComponent implements OnInit{
  @Input() parentChildData : any
  @Output() childMessageToParent = new EventEmitter<string>();
  ngOnInit(): void {
    console.log("Received from Parent Component:" + this.parentChildData.empName);
  }
  childConfirm(): void {
    this.childMessageToParent.emit("Confirmation from Child Component : Confirmed");
  }
}
