import { Component, OnInit } from '@angular/core';
import { AlertController,NavController } from '@ionic/angular';
import { UserService } from '../api/user.service';

@Component({
  selector: 'app-viewmanager',
  templateUrl: './viewmanager.page.html',
  styleUrls: ['./viewmanager.page.scss'],
})
export class ViewmanagerPage implements OnInit {

  items = [];
  shops= [];
  createSuccess = false;
  addToCartCredentials = { itemname: '', qty: '', unitprice: '' };

  constructor(private alertCtrl: AlertController, private auth: UserService, private nav:NavController) { 
    
    this.initializeItems();
    
  }

  ngOnInit() {
  }

  initializeItems(){
    this.auth.getManagers().subscribe(manager => {
      console.log(manager);
      for(let i in manager){
          var foodObj = {
            managerid:manager[i][0],
            managerfirstname:manager[i][2],
            managerlastname:manager[i][3],
            managermobile:manager[i][4],
            manageremail:manager[i][5],
            managerusername:manager[i][1],
            managershopid:manager[i][8],
            managershopname:manager[i][10]
          }
          this.items.push(foodObj);
          console.log(this.items);
      }
      
     },
     error => {
       console.log(error);
     });

  }

}