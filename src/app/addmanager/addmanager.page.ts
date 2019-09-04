import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { UserService } from '../api/user.service';

@Component({
  selector: 'app-addmanager',
  templateUrl: './addmanager.page.html',
  styleUrls: ['./addmanager.page.scss'],
})
export class AddmanagerPage implements OnInit {

  items =[];
  createSuccess = false;
  addManagerCredentials = { firstname: '', lastname: '', email:'',  mobileno: '', username: '', password: '', shop:''};

  constructor(private alertCtrl: AlertController, private auth: UserService) {
    this.initializeItems();
   }

  ngOnInit() {
  }

  initializeItems(){
    this.auth.getShops().subscribe(shop => {
      console.log(shop);
      for(let i in shop){
        console.log(i);
        var itemObj = {
          shopid:shop[i][0],
          shopname:shop[i][1]
        }
        this.items.push(itemObj);
        console.log(this.items);
      }
     },
     error => {
       console.log(error);
     });
  }

  public addManager() {
    this.auth.addManager(this.addManagerCredentials).subscribe(success => {
      if (success) {
        this.createSuccess = true;
        this.showPopup('Success', 'Manager Added Successfully.');
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
