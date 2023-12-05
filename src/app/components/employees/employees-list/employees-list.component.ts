import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {
  employees: Employee[] = [];
  userName: string | null = null;
  constructor(private empoloyeesService: EmployeesService, private router:Router) { }

  ngOnInit(): void {
    this.userName = localStorage.getItem("name");
    this.empoloyeesService.getAllEmployess()
    .subscribe({
      next: (employees) => {
        this.employees = employees;
      },
      error: (response) => {
        console.log(response);
      }
    })
  }
  deleteEmployee(id:string){
    this.empoloyeesService.deleteEmployee(id).subscribe({
      next: (response) => {
       this.refreshEmployeeList();
      }
    });
  }

  refreshEmployeeList() {
    // Assuming you have a method in your service to fetch the updated list.
    this.empoloyeesService.getAllEmployess().subscribe({
      next: (employees) => {
        // Update the list in your component.
        this.employees = employees; // Make sure to define "employeeList" in your component.
      },
      error: (error) => {
        // Handle error if needed.
        console.error('Error refreshing employee list:', error);
      }
    });
  }
}
