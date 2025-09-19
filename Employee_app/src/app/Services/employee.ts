import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Employee } from '../Models/employe';
import { BehaviorSubject } from 'rxjs';
import {tap} from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class EmployeeServices {
  private apiUrl = 'https://localhost:7033/api/Employee';
  private http = inject(HttpClient);

  private employeCountSubject=new BehaviorSubject<number>(0);
  employeeCount$=this.employeCountSubject.asObservable();


  getAllEmployees() {
    return this.http.get<Employee[]>(this.apiUrl);
  }

  addEmployee(data: Employee) {
    return this.http.post<Employee>(this.apiUrl, data);
  }

  updateEmployee(employee: Employee) {
    return this.http.put<Employee>(`${this.apiUrl}/${employee.empId}`, employee);
  }

  deleteEmployee(empId: number) {
    return this.http.delete<void>(`${this.apiUrl}/${empId}`);
  }
}

