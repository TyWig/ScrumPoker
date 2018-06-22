import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NumberDisplayPage } from './number-display';
import { PokerServiceProvider } from '../../providers/poker-service/poker-service';

@NgModule({
  declarations: [
    NumberDisplayPage,
  ],
  imports: [
    IonicPageModule.forChild(NumberDisplayPage),
  ],
  providers: [PokerServiceProvider]
})
export class NumberDisplayPageModule {}
