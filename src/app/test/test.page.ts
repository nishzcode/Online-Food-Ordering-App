import { Component , OnInit} from '@angular/core';
import { AlertController } from '@ionic/angular';
import { UserService } from '../api/user.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage  {
  createSuccess = false;
  addToCartCredentials = { itemname: '', qty: '', unitprice: '' };
  items:Items[];

  constructor(private alertCtrl: AlertController, private auth: UserService) {
    this.getItems();
   }

  ngOnInit() {
  }

  public getItems(){
    this.auth.getFoodItems().subscribe(res => {
    },
    error => {
      console.log(error);
    });
  }

  public addToCart() {
    this.auth.addToCart(this.addToCartCredentials).subscribe(success => {
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
interface Items{
  id:string,
  price:string;
  itemname:string;
  itempic:string;
}