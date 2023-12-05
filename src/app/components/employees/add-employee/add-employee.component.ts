import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  addEmployeeRequest: Employee = {
    id: '',
    firstName: '',
    lastName: '',
    gender: '',
    joinedOn: new Date(),
    dateOfBirth: null,
    age: 0,
    address: '',
    country: ''
  }
  constructor(private employeeService: EmployeesService, private router: Router) { }

  ngOnInit(): void {
  }
  onJoinedOnChange(event: any): void {
    
  }


  saveUser(): void {
      const formData: FormData = new FormData();
      // Append other properties
      formData.append('id', this.addEmployeeRequest.id);
      formData.append('firstName', this.addEmployeeRequest.firstName);
      formData.append('lastName', this.addEmployeeRequest.lastName);
      formData.append('gender', this.addEmployeeRequest.gender);
      formData.append('joinedOn', this.addEmployeeRequest.joinedOn ? this.addEmployeeRequest.joinedOn.toISOString() : '');
      formData.append('age', this.addEmployeeRequest.age?.toString() ?? '');
      formData.append('address', this.addEmployeeRequest.address);
      formData.append('country', this.addEmployeeRequest.country);
      this.employeeService.addEmployee(formData).subscribe(
        {
          next: (employee) => {
            this.router.navigate(['employees']);
          },
          error: (response) => {
            console.log(response);
          }
        }
      );
    }

}
