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
    joinedOn: null,
    dateOfBirth: null,
    age: 0,
    address: '',
    country: ''
  }
  constructor(private employeeService: EmployeesService, private router: Router) { }

  ngOnInit(): void {
  }
  addEmployee(){
    this.addEmployeeRequest.id = '';
    this.employeeService.addEmployee(this.addEmployeeRequest).subscribe(
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
