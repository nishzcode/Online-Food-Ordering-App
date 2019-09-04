import { Component , OnInit} from '@angular/core';
import { AlertController,NavController } from '@ionic/angular';
import { UserService } from '../api/user.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  items = [];
  createSuccess = false;
  addToCartCredentials = { itemname: '', qty: '', unitprice: '' };

  constructor(private alertCtrl: AlertController, private auth: UserService, private nav:NavController,public loadingController: LoadingController) { 
    
    this.initializeItems();
    this.presentLoadingWithOptions();
  }

  ngOnInit() {
  }

  initializeItems(){
    this.auth.getFoodItems().subscribe(food => {
      console.log(food);
      for(let i in food){
          var foodObj = {
            foodid:food[i][0],
            foodname:food[i][2],
            description:food[i][3],
            foodprice:food[i][4],
            foodpic:food[i][5],
            foodshop:food[i][1]
          }
          this.items.push(foodObj);
          console.log(this.items);
      }
     },
     error => {
       console.log(error);
     });
  }

  async presentLoadingWithOptions() {
    const loading = await this.loadingController.create({
      spinner: "bubbles",
      duration: 1500,
      message: 'Please wait...',
      translucent: true,
      cssClass: 'custom-class custom-loading'
    });
    return await loading.present();
  } 

}
