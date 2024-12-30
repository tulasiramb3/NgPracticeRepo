import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  api_url: string = 'https://dummyjson.com/auth'
  http = inject(HttpClient);

  authTokenSubject = new BehaviorSubject<any>(null);
  authObservable$ = this.authTokenSubject.asObservable();




  profileSubject = new BehaviorSubject<any>(null);
  profile$ = this.profileSubject.asObservable();

  constructor() { }

  login(userName: string, password: string) {
    return this.http.post(`${this.api_url}/login`, { username: userName, password: password })
      .pipe(
        tap((response) => {
          this.authTokenSubject.next(response)
        })
      );
  }

  logout(){
    localStorage.removeItem('token');
    this.authTokenSubject.next(null);
    this.profileSubject.next(null);
  }

  fetchUserProfile(token:string) : Observable<any>{
    return this.http.get(`${this.api_url}/me`, 
      {
        headers : {
          Authorization : 'Bearer '+token
        }
      }
    ).pipe(
      tap((res)=>{
        this.profileSubject.next(res)
      })
    )
  }

}
