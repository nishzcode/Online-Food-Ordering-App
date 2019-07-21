import { Component , OnInit} from '@angular/core';
import { AlertController } from '@ionic/angular';
import { UserService } from '../api/user.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  createSuccess = false;
  addToCartCredentials = { itemname: '', qty: '', unitprice: '' };

  constructor(private alertCtrl: AlertController, private auth: UserService) { }

  ngOnInit() {
  }

  public addToCart(id) {
    this.auth.addToCart(id);
    // this.auth.addToCart(this.addToCartCredentials).subscribe(success => {
    //   if (success) {
    //     this.createSuccess = true;
    //     this.showPopup('Success', 'Items Added to Cart Successfully.');
    //   } else {
    //     this.showPopup('Error', 'Problem adding to Cart.');
    //   }
    // },
    //   error => {
    //     this.showPopup('Error', error);
    //   });
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
