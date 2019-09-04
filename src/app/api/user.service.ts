import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Storage } from '@ionic/storage';
//import { type } from 'os';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  });

  cart = [];
  userName: string;
  shopId: number;


  constructor(public http: HttpClient, private storage: Storage) { }

  // add items to cart
  // take cart items locally till place order
  public addToCart(id) {
    this.storage.remove('cart');
    this.cart.push(id);
    this.storage.set('cart', JSON.stringify(this.cart));
  }

  public setUser(username) {
    this.userName = username;
  }

  public getUser() {
    return this.userName;
  }

  public setShop(shopid) {
    this.shopId = shopid;
  }
  public getShop() {
    return this.shopId;
  }

  public getCart() {
    return this.storage.get('cart');
  }

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
  public login(credentials) {
    this.setUser(credentials.username);
    return this.http.post('http://127.0.0.1:5000/login',
      (
        {
          'username': credentials.username,
          'password': credentials.password
        }), { headers: this.headers }).pipe(map(res => res));
  }

  // manager register
  public addManager(credentials) {
    return this.http.post('http://127.0.0.1:5000/addManager',
      (
        {
          'firstname': credentials.firstname,
          'lastname': credentials.lastname,
          'email': credentials.email,
          'mobileno': credentials.mobileno,
          'username': credentials.username,
          'password': credentials.password,
          'shop': credentials.shop
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

  // add food
  public addFood(credentials) {
    console.log(this.shopId);
    return this.http.post('http://127.0.0.1:5000/addFood',
      (
        {
          'shopid':this.shopId,
          'itemname': credentials.itemname,
          'description': credentials.description,
          'price': credentials.price
          
          
        }), { headers: this.headers }).pipe(map(res => res));
  }

  // add to cart
  // public addToCart(credentials) {
  //   return this.http.post('http://127.0.0.1:5000/addToCart',
  //     (
  //       {
  //         'itemname': credentials.itemname,
  //         'qty': credentials.qty,
  //         'unitprice': credentials.unitprice
  //       }), { headers: this.headers }).pipe(map(res => res));
  // }

  // add order
  public placeOrder(credentials) {
    // 'qty': credentials.qty,
    //       'unitprice': credentials.unitprice,
    //       'total': credentials.total,
    //       'orderdate': credentials.orderdate,
    //       'ordertime': credentials.ordertime
    return this.http.post('http://127.0.0.1:5000/placeOrder',
      (
        {
          'items': credentials
        }), { headers: this.headers }).pipe(map(res => res));
  }

  // view managers
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

  // view requests
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

  // get items
  public getFoodItems() {
    return this.http.post('http://localhost:5000/getFoodItems',
    (
      {
        'shopid': this.shopId
      }), { headers: this.headers }).pipe(map(res => res));
  }

  // add restaurant
  public addRestaurant(credentials) {
    return this.http.post('http://127.0.0.1:5000/addRestaurant',
      (
        {
          'shopname': credentials.shopname,
          'description': credentials.description
        }), { headers: this.headers }).pipe(map(res => res));
  }

  // get shops
  public getShops() {
    return this.http.get('http://127.0.0.1:5000/getShops',
      { headers: this.headers }).pipe(map(res => res));
  }

  // get managers
  public getManagers() {
    return this.http.get('http://127.0.0.1:5000/getManagers',
      { headers: this.headers }).pipe(map(res => res));
  }

  // get cashiers
  public getCashiers() {
    console.log(this.shopId);
    return this.http.post('http://127.0.0.1:5000/getCashiers',
      (
        {
          'shopid': this.shopId
        }
      ), { headers: this.headers }).pipe(map(res => res));
  }

}
