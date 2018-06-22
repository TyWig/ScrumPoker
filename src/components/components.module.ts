import { NgModule } from '@angular/core';
import { TileComponent } from './tile/tile';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from 'ionic-angular';
import { PokerServiceProvider } from '../providers/poker-service/poker-service';
@NgModule({
	declarations: [
		TileComponent,
	],
	imports: [
		BrowserModule,
		IonicModule
	],
	exports: [TileComponent],
	providers: [PokerServiceProvider]
})
export class ComponentsModule {}
