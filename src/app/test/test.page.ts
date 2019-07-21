import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { UserService } from '../api/user.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage {

  products: Products[] = [];
  items: Products[] = [];

  constructor(private alertCtrl: AlertController, private auth: UserService) {
    this.initializeItems();
  }

  initializeItems() {
    this.auth.getFoodItems().subscribe(product => {
      this.items = [];
      this.products = [];
      for (let i in product) {
        this.items.push(product[i]);
        this.products.push(product[i]);
      }
    },
      error => {
        console.log(error);
      });
  }

}
interface Products {
  id: string;
  price: string;
  itemname: string;
  itempic: string;
}