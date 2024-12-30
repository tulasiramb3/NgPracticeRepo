import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  api_Url : string = "https://jsonplaceholder.typicode.com/users";
  httpClient = inject(HttpClient);
  constructor() { }

  getUsers() : Observable<any[]>{
    return this.httpClient.get<any[]>(this.api_Url);
  }


}
