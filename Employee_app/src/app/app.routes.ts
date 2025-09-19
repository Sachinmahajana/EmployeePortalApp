// import { Routes } from '@angular/router';
// import { EmployeeComponent } from './Components/employee/employee';
// import { Login } from './pages/login/login';
// import { authGuard } from './Services/auth-guard';

// export const routes: Routes = [
//   { path: '', redirectTo: 'login', pathMatch: 'full' },
//   { path: 'login', component: Login },

//   // Employee page directly, protected by auth guard
//   { path: 'employee', component: EmployeeComponent, canActivate: [authGuard] },

//   // fallback
//   { path: '**', redirectTo: 'login' }
// ];


import { Routes } from '@angular/router';
import { EmployeeComponent } from './Components/employee/employee';
import { Login } from './pages/login/login';
import { Dashboard } from './Components/dashboard/dashboard';
import { authGuard } from './Services/auth-guard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login },

  // Dashboard & Employee are protected
  { path: 'dashboard', component: Dashboard, canActivate: [authGuard] },
  { path: 'employee', component: EmployeeComponent, canActivate: [authGuard] },

  // fallback
  { path: '**', redirectTo: 'login' }
];
