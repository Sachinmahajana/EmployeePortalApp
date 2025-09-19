import { Component, inject } from '@angular/core';
import { EmployeeServices } from '../../Services/employee';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../Services/auth';

@Component({
  selector: 'app-dashboard',
  imports: [RouterLink],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {
  userName:string='';
  totalEmployees:number=0;

  private empservice=inject(EmployeeServices);
  private router=inject(Router);
  private auth=inject(AuthService);

  //load user


  ngOnInit(){
   const user = JSON.parse(localStorage.getItem('user') || '{}');
    this.userName = user.fullname || user.Useremail || 'User';

    // Get total employees
    this.empservice.getAllEmployees().subscribe(res => {
      this.totalEmployees = res.length;
    })
  }
  
  logout(){
    this.auth.logout();
  }
  goToEmployees(){
  this.router.navigate(['/employee'])
}
}




