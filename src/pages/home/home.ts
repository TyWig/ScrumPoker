import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  numbers = [1,1,2,3,5,8,13,21,34];
  themeColor: String = "accent";

  constructor(
    private navCtrl: NavController,
  ) { }

}
