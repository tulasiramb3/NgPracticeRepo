import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-profile',
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  userDetails: any;
  authService = inject(AuthService);
  ngOnInit(): void {
    console.log('token from localstorage : ' + localStorage.getItem('token'));
    let token = localStorage.getItem('token');
    if (token != null) {
      this.authService.fetchUserProfile(token).subscribe(
        (res) => {
          this.userDetails = res;
        },
        (error)=>{
          console.log(error);
        }
      )
    }
  }

}
