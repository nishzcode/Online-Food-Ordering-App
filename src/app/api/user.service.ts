import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  });
  constructor(public http: HttpClient) { }

  // register
  public register(credentials) {
    return this.http.post('http://127.0.0.1:5000/cusregister',
    (
      { 'firstname': credentials.firstname,
      'lastname': credentials.lastname,
      'email': credentials.email,
      'mobileno': credentials.mobileno,
      'username': credentials.username,
      'password': credentials.password
    })).pipe(map(res => res));
  }
}
