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
  loginCredentials  = { username: '', password: ''};

  constructor(private alertCtrl: AlertController, private auth: UserService) { }

  ngOnInit() {
  }

  public login() {
    this.auth.login(this.loginCredentials).subscribe(success => {
      if (success) {
        this.loginSuccess = true;
        this.showPopup('Success', 'Login Successful.');
      } else {
        this.showPopup('Error', 'Login Failed.');
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
