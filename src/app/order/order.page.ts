import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { UserService } from '../api/user.service';
import { ConstantPool } from '@angular/compiler';

@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
})
export class OrderPage implements OnInit {

  createSuccess = false;
  placeOrderCredentials = { qty: '', unitprice: '', total: '', orderdate: '', ordertime: '' };
  cart = [];
  tempCart = [];
  totalPrice = 0;

  constructor(private alertCtrl: AlertController, private auth: UserService) {
    this.getCart();
  }

  ngOnInit() {
  }

  getCart() {
    this.tempCart = [];
    const temp__ = this.auth.getCart().then(data => {
      this.cart = data;
      for (let i = 0; i < this.cart.length; i++) {
        if (this.cart[i] === '1') {
          const tempitem1 = { name: 'Cheese Burger', price: '500' };
          this.totalPrice += 500;
          this.tempCart.push(tempitem1);
        } if (this.cart[i] === '2') {
          const tempitem2 = { name: 'Chicken Burger', price: '440' };
          this.totalPrice += 440;
          this.tempCart.push(tempitem2);
        }
      }
    });
  }

  public placeOrder() {
    let temp_str = '';
    for (let i = 0; i < this.cart.length; i++) {
      temp_str += this.cart[i];
    }
    this.auth.placeOrder(temp_str).subscribe(success => {
      if (success) {
        this.createSuccess = true;
        this.showPopup('Success', 'Items Added to Cart Successfully.');
      } else {
        this.showPopup('Error', 'Problem adding to Cart.');
      }
    },
      error => {
        this.showPopup('Error', error);
      });
  }


  async showPopup(title, text) {
    const alert = await this.alertCtrl.create({
      header: title,
      message: text,
      buttons: [
        {
          text: 'OK',
          handler: data => {
            if (this.createSuccess) {
            }
          }
        }
      ]
    });
    await alert.present();
  }
}
