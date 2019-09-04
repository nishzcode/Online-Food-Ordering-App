import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { UserService } from '../api/user.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginSuccess = false;
  loginCredentials = { username: '', password: '' };

  constructor(private alertCtrl: AlertController, private auth: UserService, private nav: NavController ,public toastController: ToastController) { }

  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 1000
    });
    toast.present();
  }
  ngOnInit() {
  }

  public login() {
    if (this.loginCredentials.username !== '' && this.loginCredentials.password !== '') {
      this.auth.login(this.loginCredentials).subscribe(success => {
        if (success !== 'error') {
          console.log(success);
          if(success[0][7] == 'customer'){
            this.presentToast('Login Successful');
            this.nav.navigateRoot('home');
          }else if(success[0][7] == 'manager'){
            this.presentToast('Login Successful');
            this.auth.setShop(success[0][8]);
            this.nav.navigateRoot('manager');
          }else if(success[0][7] == 'admin'){
            this.presentToast('Login Successful');
            this.nav.navigateRoot('admin');
          }
          // this.loginSuccess = true;
          // this.showPopup('Success', 'Login Successful.');
        } else {
          this.presentToast('Invalid Credentials');
        }
      },
        error => {
          this.presentToast('Error');
        });
    } else {
      this.presentToast('Please Enter Credentials');
    }
  }


  // async showPopup(title, text) {
  //   const alert = await this.alertCtrl.create({
  //     header: title,
  //     message: text,
  //     buttons: [
  //       {
  //         text: 'OK',
  //         handler: data => {
  //           if (this.loginSuccess) {
              
  //              //this.nav.navigateForward('/restaurants');
  //           }
  //         }
  //       }
  //     ]
  //   });
  //   await alert.present();
  // }

  
}
