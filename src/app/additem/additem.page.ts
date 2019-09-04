import { Component , OnInit} from '@angular/core';
import { AlertController,NavController } from '@ionic/angular';
import { UserService } from '../api/user.service';

@Component({
  selector: 'app-additem',
  templateUrl: './additem.page.html',
  styleUrls: ['./additem.page.scss'],
})
export class AdditemPage implements OnInit {

  createSuccess = false;
  addFoodCredentials = { itemname: '', description: '', price: '' };
  
  constructor(private alertCtrl: AlertController, private auth: UserService, private nav:NavController) { }

  ngOnInit() {
  }

  public addFood() {
    this.auth.addFood(this.addFoodCredentials).subscribe(success => {
      if (success) {
        this.createSuccess = true;
        this.showPopup('Success', 'Food Added Successfully.');
      } else {
        this.showPopup('Error', 'Problem adding Food.');
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
