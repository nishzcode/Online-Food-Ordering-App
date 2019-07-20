import { Component , OnInit} from '@angular/core';
import { AlertController } from '@ionic/angular';
import { UserService } from '../api/user.service';

@Component({
  selector: 'app-requestadmin',
  templateUrl: './requestadmin.page.html',
  styleUrls: ['./requestadmin.page.scss'],
})
export class RequestadminPage implements OnInit {

  createSuccess = false;
  registerMgrCredentials = { firstname: '', lastname: '',email: '', mobileno: '', username: '' , password: '' };

  constructor(private alertCtrl: AlertController, private auth: UserService) { }

  ngOnInit() {
  }

  public mgrRegister() {
    this.auth.mgrRegister(this.registerMgrCredentials).subscribe(success => {
      if (success) {
        this.createSuccess = true;
        this.showPopup('Success', 'Account created.');
      } else {
        this.showPopup('Error', 'Problem creating account.');
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
