import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user: User = {
    id: "",
    name: "",
    email: "",
    password: "",
    accessToken: ""
  };
  constructor(private userService: UserService, private router: Router) { }
  ngOnInit(): void {
  }
  login() {
    this.userService.login(this.user).subscribe(response => {
      if (response.message === "Login successful") {
        sessionStorage.setItem("userObj",response.user);
        this.router.navigate(['/employees']);
      } else {
        console.log('Login failed');
      }
    }, error => {
      alert('Login failed. Check your credentials.');
    });
  }
}