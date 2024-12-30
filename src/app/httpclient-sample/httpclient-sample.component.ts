import { Component } from '@angular/core';
import { CommonService } from '../services/common.service';
import { User } from '../models/user';
import { Pipe } from '@angular/core';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-httpclient-sample',
  imports: [JsonPipe],
  templateUrl: './httpclient-sample.component.html',
  styleUrl: './httpclient-sample.component.css'
})
export class HttpclientSampleComponent {
  userList: User[] = []
  constructor(private commonService: CommonService) {
    this.commonService.getUsers().subscribe((res) => {
        this.userList = res.map((user)=>{
            return {
              userName : user?.username,
              email : user?.email,
              phone : user?.phone,
              address : user?.address,
              company:user.company
            }
        })
    });  

  }


}
