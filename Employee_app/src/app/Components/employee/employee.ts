import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule, NgIf, NgFor } from '@angular/common';
import { EmployeeServices } from '../../Services/employee';
import { Employee } from '../../Models/employe';
import { AuthService } from '../../Services/auth';
import { Modal } from 'bootstrap';
import { EmployeeForm } from '../../employee-form/employee-form';


@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [CommonModule, NgIf, NgFor, EmployeeForm],   // ✅ include child
  templateUrl: './employee.html',
  styleUrls: ['./employee.css']
})
export class EmployeeComponent implements OnInit {

  employeelist: Employee[] = [];
  formValues: Employee | null = null;
  private employeeModal!: Modal;

  constructor(
    private empService: EmployeeServices,
    private auth: AuthService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getEmployees();

    const modalElement = document.getElementById('employeeModal');
    if (modalElement) {
      this.employeeModal = new Modal(modalElement, { backdrop: 'static', keyboard: false });
    }
  }

  trackByEmpId(index: number, item: Employee): number {
    return item.empId;
  }

  getEmployees() {
    this.empService.getAllEmployees().subscribe({
      next: (res: Employee[]) => {
        this.employeelist = res;
        this.cdr.detectChanges();
      },
      error: err => console.error(err)
    });

  }

  openModal(emp?: Employee) {
    if (emp) {
      this.formValues = { ...emp };
    } else {
      this.formValues = null;
    }
    this.employeeModal.show();
  }

  closeModal() {
    this.formValues = null;
    this.employeeModal.hide();
  }

  // ✅ New method to handle child form submit
  handleFormSubmit(emp: Employee) {
    if (emp.empId) {
      // Update existing
      this.empService.updateEmployee(emp).subscribe({
        next: () => {
          const idx = this.employeelist.findIndex(e => e.empId === emp.empId);
          if (idx !== -1) this.employeelist[idx] = emp;
          alert('Employee updated successfully');
          this.closeModal();
          this.cdr.detectChanges();
        },
        error: err => console.error(err)
      });
    } else {
      // Add new
      this.empService.addEmployee(emp).subscribe({
        next: (res: Employee) => {
          this.employeelist.push(res);
          alert('Employee added successfully');
          this.closeModal();
          this.cdr.detectChanges();
        },
        error: err => console.error(err)
      });
    }
  }

  onEdit(emp: Employee) {
    this.openModal(emp);
  }

  onDelete(empId: number) {
    if (confirm('Are you sure to delete this employee?')) {
      this.empService.deleteEmployee(empId).subscribe({
        next: () => {
          this.employeelist = this.employeelist.filter(e => e.empId !== empId);
          alert('Employee deleted successfully');
          this.cdr.detectChanges();
        },
        error: err => console.error(err)
      });
    }
  }

  logOff() {
    this.auth.logout();
  }
}
