import { AsyncPipe, CommonModule, DatePipe, JsonPipe, LowerCasePipe, UpperCasePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CommonService } from '../services/common.service';
import { AddressformatPipe } from '../pipes/addressformat.pipe';

@Component({
  selector: 'app-pipesconcepts',
  imports: [CommonModule, DatePipe,UpperCasePipe,LowerCasePipe,JsonPipe,AsyncPipe,AddressformatPipe],
  templateUrl: './pipesconcepts.component.html',
  styleUrl: './pipesconcepts.component.css'
})
export class PipesconceptsComponent {
  dateVal = new Date();
  displayName :string ='Hello From Pipes World';
  commonService = inject(CommonService)
  users$;
  constructor() {
    this.users$ = this.commonService.getUsers();
  }

}
