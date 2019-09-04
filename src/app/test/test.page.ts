import { Component, OnInit} from '@angular/core';
import { AlertController,NavController } from '@ionic/angular';
import { UserService } from '../api/user.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage implements OnInit{

  userName= "";
  items= [];
  
  constructor(private alertCtrl: AlertController, private auth: UserService, private nav: NavController) { 
    this.userName = this.auth.getUser();
    
    this.initializeItems();
  }
  ngOnInit() {
  }
  
  initializeItems(){
    this.auth.getShops().subscribe(shop => {
      console.log(shop);
      for(let i in shop){
        console.log(i);
        var itemObj = {
          shopid:shop[i][0],
          shopname:shop[i][1],
          description:shop[i][2],
          shoppic:shop[i][3]
        }
        this.items.push(itemObj);
        console.log(this.items);
        //this.shops.push(shop[i]);
      }
     },
     error => {
       console.log(error);
     });
  }

  loadMenu(shopid){
    console.log(shopid);
    this.auth.setShop(shopid);
    this.nav.navigateForward('test2');
  }
}

