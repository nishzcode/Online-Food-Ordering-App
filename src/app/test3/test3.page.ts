import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-test3',
  templateUrl: './test3.page.html',
  styleUrls: ['./test3.page.scss'],
})
export class Test3Page implements OnInit {
 
  
  constructor(public loadingController: LoadingController) { 
    
  }

  ngOnInit() {
  }

}
