import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesListComponent } from './components/employees/employees-list/employees-list.component';
import { AddEmployeeComponent } from './components/employees/add-employee/add-employee.component';
import { EditEmployeeComponent } from './components/employees/edit-employee/edit-employee.component';
import { LoginComponent } from './components/users/login/login.component';
import { SignupComponent } from './components/users/signup/signup.component';
import { PageNotFoundComponent } from './components/nullpage/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path:'',
    component: LoginComponent
  },
  {
    path:'employees',
    component: EmployeesListComponent
  },
  {
    path:'employees/add',
    component: AddEmployeeComponent,
  },
  {
    path:'employees/edit/:id',
    component: EditEmployeeComponent
  },
  {
    path:'user/login',
    component: LoginComponent
  },
  {
    path:'user/signup',
    component: SignupComponent
  },
  {
    path:'**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
