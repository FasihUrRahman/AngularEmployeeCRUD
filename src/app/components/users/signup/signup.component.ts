import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user: User = {
    id: '',
    email: '',
    name: '',
    password: '',
    accessToken: ''
  };
  
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }
  signUp() {
    this.userService.signUp(this.user).subscribe(response => {
      alert(response.Message);
      // Redirect to home page or handle as needed
    }, error => {
      alert('Signup failed. Please try again.');
    });
  }
}
