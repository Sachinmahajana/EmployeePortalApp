import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../Services/auth';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [FormsModule,CommonModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {

  toggleForm: boolean = false;

  registerObj: any = {
    UserId: 0,
    Useremail: '',
    Password: '',
    Createddate: new Date(),
    fullname: '',
    mobileno: '',
  }
  loginObj: any={
    Useremail:'',
    Password: '',
  }
  http=inject(HttpClient);
  router=inject(Router);
  auth=inject(AuthService);

  onRegister(form:any){
    if(!form.valid){
      return;
    }
    this.http.post("https://localhost:7033/api/User/Register",this.registerObj).subscribe((res:any)=>{
      debugger;
      alert(res.message);
    },error=>{
      debugger;
      if(error.status===400){
        alert(error.error);
      }
    })
  }
  onLogin(form:any){
    if(!form.valid){
      return;
    }
      console.log("Sending loginObj:", this.loginObj);
    this.http.post("https://localhost:7033/api/User/Login",this.loginObj).subscribe((res:any)=>{
      debugger;
      alert("Login Success");
      this.auth.login(res);
      localStorage.setItem("showListonly","true");
      this.router.navigate(['/dashboard']);
    },error=>{
      debugger;
      if(error.status===400){
        alert(error.error)
      }
    })
  }
 
  }

