import { Component, OnInit } from '@angular/core';
import { AlertController,NavController } from '@ionic/angular';
import { UserService } from '../api/user.service';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.page.html',
  styleUrls: ['./manager.page.scss'],
})
export class ManagerPage implements OnInit {

  items = [];
  //shopId;

  constructor(private alertCtrl: AlertController, private auth: UserService, private nav: NavController) { 

    //this.shopId = this.auth.getShop();
    this.initializeItems();
  }

  ngOnInit() {
  }

  initializeItems(){
    this.auth.getManagers().subscribe(manager => {
      console.log(manager);
      for(let i in manager){
        var itemObj = {
          shopid:manager[i][8]
        }
        this.items.push(itemObj);
        console.log(this.items[0].shopid);
      }
     },
     error => {
       console.log(error);
     });

     
  }

  loadAddItem(shopid){
    //this.auth.setShop(this.items[0].shopid);
    this.nav.navigateForward('additem');

  }

  loadCashiers(){
    
    //this.auth.setShop(this.items[0].shopid);
    //console.log(this.items[0].shopid)
    this.nav.navigateForward('viewcashier');
  }
}
