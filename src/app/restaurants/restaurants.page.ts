import { Component, OnInit} from '@angular/core';
import { AlertController,NavController } from '@ionic/angular';
import { UserService } from '../api/user.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-test',
  templateUrl: './restaurants.page.html',
  styleUrls: ['./restaurants.page.scss'],
})
export class RestaurantsPage implements OnInit{

  userName= "";
  items= [];
  
  constructor(private alertCtrl: AlertController, private auth: UserService, private nav: NavController,public loadingController: LoadingController) { 
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
      }
     },
     error => {
       console.log(error);
     });
  }

  loadMenu(shopid){
    console.log(shopid);
    this.auth.setShop(shopid);
    this.nav.navigateForward('menu');
  }

  

  
}

