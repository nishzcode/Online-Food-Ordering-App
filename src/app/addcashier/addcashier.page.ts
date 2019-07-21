import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { UserService } from '../api/user.service';

@Component({
  selector: 'app-addcashier',
  templateUrl: './addcashier.page.html',
  styleUrls: ['./addcashier.page.scss'],
})
export class AddcashierPage implements OnInit {

  createSuccess = false;
  addCashierCredentials = { firstname: '', lastname: '', email:'',  mobileno: '', username: '', password: '' };

  constructor(private alertCtrl: AlertController, private auth: UserService) { }

  ngOnInit() {
  }

  public addCashier() {
    this.auth.addCashier(this.addCashierCredentials).subscribe(success => {
      if (success) {
        this.createSuccess = true;
        this.showPopup('Success', 'Cashier Added Successfully.');
      } else {
        this.showPopup('Error', 'Problem adding Cashier.');
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
