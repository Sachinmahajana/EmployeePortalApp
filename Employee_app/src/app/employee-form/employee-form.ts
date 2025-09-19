import { Component, EventEmitter, Input, Output, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Employee } from '../Models/employe';

@Component({
  selector: 'app-employee-form',
  standalone: true,   // ✅ standalone so you can import directly
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './employee-form.html',
  styleUrls: ['./employee-form.css']
})
export class EmployeeForm implements OnChanges {
  @Input() employee: Employee | null = null;             // 🔹 Parent passes data here
  @Output() formSubmit = new EventEmitter<Employee>();   // 🔹 Notify parent on submit

  employeeForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.employeeForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(18)]],
      salary: ['', [Validators.required, Validators.min(0)]],
      status: [false]
    });
  }

  ngOnChanges() {
    if (this.employee) {
      this.employeeForm.patchValue(this.employee);   // If editing → load values
    } else {
      this.employeeForm.reset({ status: false });    // If adding → empty form
    }
  }

  onSubmit() {
    if (this.employeeForm.valid) {
      const emp: Employee = { ...this.employee, ...this.employeeForm.value };
      this.formSubmit.emit(emp);  // 🔹 Send data to parent
    }
  }
}
