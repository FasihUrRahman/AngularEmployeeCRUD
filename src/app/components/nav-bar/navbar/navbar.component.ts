import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent implements OnInit {
  constructor(private router:Router ) { }
  isLoggedIn$: any;
  navigateToLogin(){
    this.router.navigateByUrl('user/login');
  }
  navigateToRegister(){
    this.router.navigateByUrl('user/signup');
  }
  ngOnInit(): void {
    this.isLoggedIn$ = sessionStorage.getItem('userObj');
  }
  logout() {
    sessionStorage.clear();
    this.router.navigateByUrl('user/login');
  }
}
