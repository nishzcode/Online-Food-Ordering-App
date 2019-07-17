import { Component , OnInit} from '@angular/core';
import { AlertController } from '@ionic/angular';
import { UserService } from '../api/user.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
})
export class OrderPage implements OnInit {

  createSuccess = false;
  placeOrderCredentials = { qty: '', unitprice: '', total: '', orderdate:'', ordertime:'' };

  constructor(private alertCtrl: AlertController, private auth: UserService) { }

  ngOnInit() {
  }


  public placeOrder() {
    this.auth.placeOrder(this.placeOrderCredentials).subscribe(success => {
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
