import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { UserService } from '../api/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginSuccess = false;
  loginCredentials = { username: '', password: '' };

  constructor(private alertCtrl: AlertController, private auth: UserService, private nav: NavController) { }

  ngOnInit() {
  }

  public login() {
    if (this.loginCredentials.username !== '' && this.loginCredentials.password !== '') {
      this.auth.login(this.loginCredentials).subscribe(success => {
        if (success !== 'error') {
          this.loginSuccess = true;
          this.showPopup('Success', 'Login Successful.');
          this.nav.navigateRoot('/home');
        } else {
          this.showPopup('Error', 'Invalid Credentials.');
        }
      },
        error => {
          this.showPopup('Error', error);
        });
    } else {
      this.showPopup('Error', 'Please Enter Credentials');
    }
  }


  async showPopup(title, text) {
    const alert = await this.alertCtrl.create({
      header: title,
      message: text,
      buttons: [
        {
          text: 'OK',
          handler: data => {
            if (this.loginSuccess) {
              // this.nav.navigateRoot('/home');
            }
          }
        }
      ]
    });
    await alert.present();
  }
}
