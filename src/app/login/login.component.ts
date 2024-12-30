import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormsModule } from '@angular/forms';
import { Login } from '../models/login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  loginService = inject(AuthService);
  credentials: Login = { userName: 'emilys', password: 'emilyspass' }
  accessToken: any;
  signedIn: boolean = false;
  constructor(private router: Router) {

  }

  ngOnInit(): void {
    if (localStorage.getItem('token') != null)
      this.signedIn = true;
    else {
      this.loginService.authObservable$.subscribe((res) => {
        if (res != null) {
          this.signedIn = true;
        }
      })
    }
  }

  login() {
    this.loginService.login(this.credentials.userName, this.credentials.password).subscribe((res: any) => {
      this.accessToken = res.accessToken
      if (this.accessToken != undefined && this.accessToken != null && this.accessToken != "") {
        console.log('user logged in');
        localStorage.setItem("token", this.accessToken);
        this.router.navigate(['/profile']);
      }
      else {
        console.log('user not logged in');
      }
    },
      error => console.error("my error response:", error)
    );

  }

  signout() {
    this.loginService.logout();
    this.router.navigateByUrl('/').then(() => {
      this.router.navigate(['/login']);
    });
  }


}
