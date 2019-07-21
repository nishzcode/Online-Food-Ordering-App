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
    return this.http.post('http://127.0.0.1:5000/cusRegister',
      (
        {
          'firstname': credentials.firstname,
          'lastname': credentials.lastname,
          'email': credentials.email,
          'mobileno': credentials.mobileno,
          'username': credentials.username,
          'password': credentials.password
        }), { headers: this.headers }).pipe(map(res => res));
  }

  // login
  public login() {
    return this.http.post('http://127.0.0.1:5000/login',
      (
        {

        }), { headers: this.headers }).pipe(map(res => res));
  }

  // manager register
  public mgrRegister(credentials) {
    return this.http.post('http://127.0.0.1:5000/mgrRegister',
      (
        {
          'firstname': credentials.firstname,
          'lastname': credentials.lastname,
          'email': credentials.email,
          'mobileno': credentials.mobileno,
          'username': credentials.username,
          'password': credentials.password
        }), { headers: this.headers }).pipe(map(res => res));
  }

  // add cashier
  public addCashier(credentials) {
    return this.http.post('http://127.0.0.1:5000/addCashier',
      (
        {
          'firstname': credentials.firstname,
          'lastname': credentials.lastname,
          'email': credentials.email,
          'mobileno': credentials.mobileno,
          'username': credentials.username,
          'password': credentials.password
        }), { headers: this.headers }).pipe(map(res => res));
  }

  // add offer
  public addOffer(credentials) {
    return this.http.post('http://127.0.0.1:5000/addOffer',
      (
        {
          'offertitle': credentials.offertitle,
          'offerdesc': credentials.offerdesc
        }), { headers: this.headers }).pipe(map(res => res));
  }

  //add food
  public addFood(credentials) {
    return this.http.post('http://127.0.0.1:5000/addFood',
      (
        {
          'itemdesc': credentials.itemdesc,
          'itemprice': credentials.itemprice
        }), { headers: this.headers }).pipe(map(res => res));
  }

  //add to cart
  public addToCart(credentials) {
    return this.http.post('http://127.0.0.1:5000/addToCart',
      (
        {
          'itemname': credentials.itemname,
          'qty': credentials.qty,
          'unitprice': credentials.unitprice
        }), { headers: this.headers }).pipe(map(res => res));
  }

  //add order
  public placeOrder(credentials) {
    return this.http.post('http://127.0.0.1:5000/placeOrder',
      (
        {
          'qty': credentials.qty,
          'unitprice': credentials.unitprice,
          'total': credentials.total,
          'orderdate': credentials.orderdate,
          'ordertime': credentials.ordertime
        }), { headers: this.headers }).pipe(map(res => res));
  }

  //view managers
  public viewManagers(credentials) {
    return this.http.post('http://127.0.0.1:5000/viewManagers',
      (
        {
          'firstname': credentials.firstname,
          'lastname': credentials.lastname,
          'email': credentials.email,
          'mobileno': credentials.mobileno,
          'username': credentials.username,
          'password': credentials.password
        }), { headers: this.headers }).pipe(map(res => res));
  }

  //view requests
  public viewRequests(credentials) {
    return this.http.post('http://127.0.0.1:5000/viewRequests',
      (
        {
          'firstname': credentials.firstname,
          'lastname': credentials.lastname,
          'email': credentials.email,
          'mobileno': credentials.mobileno,
          'username': credentials.username,
          'password': credentials.password
        }), { headers: this.headers }).pipe(map(res => res));
  }

  public getFoodItems() {
    return this.http.post('http://127.0.0.1:5000/getFoodItems',
      (
        {
          'itemname': credentials.itemname,
          'price': credentials.price,
          'itempic': credentials.itempic
        }),{ headers: this.headers }).pipe(map(res => res));
   }
}
