import { Component, OnInit } from '@angular/core';
import { AlertController,NavController } from '@ionic/angular';
import { UserService } from '../api/user.service';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.page.html',
  styleUrls: ['./test2.page.scss'],
})
export class Test2Page implements OnInit {
  
  items = [];
  createSuccess = false;
  addToCartCredentials = { itemname: '', qty: '', unitprice: '' };

  constructor(private alertCtrl: AlertController, private auth: UserService, private nav:NavController) { 
    
    this.initializeItems();
    
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

}
