import { Component , OnInit} from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { AuthServiceService } from '../../app/auth-service.service';
import { UserService } from '../api/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  createSuccess = false;
  registerCredentials = { firstname: '', lastname: '', mobileno: '', username: '' , password: '' };

  constructor(private alertCtrl: AlertController, private auth: UserService) { }

  ngOnInit() {
  }

  public register() {
    this.auth.register(this.registerCredentials).subscribe(success => {
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
             // this.nav.navigateRoot('/home');
            }
          }
        }
      ]
    });
    await alert.present();
  }
}
