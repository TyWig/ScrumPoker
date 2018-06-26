import { Component, Input } from '@angular/core';
import { PokerServiceProvider } from '../../providers/poker-service/poker-service';
import { NavController } from 'ionic-angular';
import { NumberDisplayPage } from '../../pages/number-display/number-display';
import { state, style, transition, animate, trigger } from '@angular/animations';

@Component({
  selector: 'tile',
  templateUrl: 'tile.html',
  animations: [
    trigger('myvisibility', [
      state('visible', style({
        opacity: 1
      })),
      state('invisible', style({
        opacity: 0
      })),
      transition('* => *', animate('.5s'))
    ])
  ]
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
