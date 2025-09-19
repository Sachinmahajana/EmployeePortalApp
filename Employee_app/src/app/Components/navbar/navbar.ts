import { Component } from '@angular/core';
import { AuthService } from '../../Services/auth';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule,RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  constructor(private auth:AuthService,private router:Router){}

  logout(){
    this.auth.logout();
  }
  isLoggedIn(){
    return this.auth.isLoggedIn();
  }
}
