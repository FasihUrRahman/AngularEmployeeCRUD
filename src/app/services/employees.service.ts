import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Employee } from '../models/employee.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  baseApiUrl:string = environment.baseApiUrl;
  constructor(private http: HttpClient) { }

  getAllEmployess(): Observable<Employee[]>{
    return this.http.get<Employee[]>(this.baseApiUrl + '/api/employee');
  }

  addEmployee(addEmployeeRequest: FormData): Observable<Employee>{
    return this.http.post<Employee>(this.baseApiUrl+'/api/employee', addEmployeeRequest);
  }

  getEmployeeById(id: string): Observable<Employee>{
    return this.http.get<Employee>(this.baseApiUrl + '/api/employee/' + id);
  }

  updateEmployee(id: string, updateEmployeeRequest: Employee): Observable<Employee>{
    return this.http.put<Employee>(this.baseApiUrl + '/api/employee/' + id, updateEmployeeRequest)
  }
  deleteEmployee(id: string): Observable<Employee>{
    return this.http.delete<Employee>(this.baseApiUrl + '/api/employee/' + id);
  }
}
