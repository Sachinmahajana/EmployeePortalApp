import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private router:Router){}
  login(user:any){
    localStorage.setItem('user',JSON.stringify(user));
  }
  logout(){
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }
  isLoggedIn(): boolean {
    return !!localStorage.getItem('user');
  }
}
