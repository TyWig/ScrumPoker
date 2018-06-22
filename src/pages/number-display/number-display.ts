import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PokerServiceProvider } from '../../providers/poker-service/poker-service';
import { HomePage } from '../home/home';

/**
 * Generated class for the NumberDisplayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-number-display',
  templateUrl: 'number-display.html',
})
export class NumberDisplayPage {
  myNumber: Number;
  show: boolean = false;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public pokerService: PokerServiceProvider
  ) { }

  ionViewDidLoad() {
    this.myNumber = this.pokerService.getNum();
  }

  showNumber() {
    if(this.show) {
      this.navCtrl.push(HomePage);
    }
    this.show = true;
  }

}
