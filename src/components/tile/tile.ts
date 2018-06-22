import { Component, Input } from '@angular/core';
import { PokerServiceProvider } from '../../providers/poker-service/poker-service';
import { NavController } from 'ionic-angular';
import { NumberDisplayPage } from '../../pages/number-display/number-display';

@Component({
  selector: 'tile',
  templateUrl: 'tile.html'
})
export class TileComponent {
  @Input() number: Number
  @Input() color: String;

  constructor(
    private pokerService: PokerServiceProvider,
    private navCtrl: NavController
  ) { }

  goToLargeNumberPage() {
    this.pokerService.setNum(this.number);
    this.navCtrl.push(NumberDisplayPage)
  }

}
