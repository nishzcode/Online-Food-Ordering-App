import { Injectable } from '@angular/core';
import { Http, Response, Headers } from "@angular/http";
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators'
//import 'rxjs/add/operator/map';

@Injectable()

export class AuthServiceService {
  username:string;
  shopid:number;


  constructor(private http:Http) {}

  setUser(username){
    this.username = username;
  }

  getUser(){
    return this.username;
  }

  setShop(shopid){
    this.shopid = shopid;
  }

  getShop(){
    return this.shopid;
  }

/*
  public register(credentials){
    if (credentials.firstname === null || credentials.lastname === null||credentials.mobileno === null||credentials.password === null||credentials.usertype === null) {
      return Observable.throw("Please insert credentials");
    } else {
      return this.http.post("http://localhost/carbon/api/signup.php",{"username":credentials.username,"firstname":credentials.firstname,"lastname":credentials.lastname,"password":credentials.password}).map(res=>res.json());
    }
  }
  ?*/
}
