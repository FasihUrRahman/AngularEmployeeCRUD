import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
baseApiUrl:string = environment.baseApiUrl;
constructor(private http: HttpClient) { }

signUp(user: any): Observable<any> {
  return this.http.post(`${this.baseApiUrl}/api/auth/signup`, user);
}

login(user: any): Observable<any> {
  return this.http.post(`${this.baseApiUrl}/api/auth/login`, user);
}
getUserName(): Observable<string | null> {
  // Assuming the user name is stored in sessionStorage
  return of(sessionStorage.getItem('accessToken'));
}
}
