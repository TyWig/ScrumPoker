import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Store } from '@ngrx/store';
import { AppState, selectorSettings } from '../../store/reducer';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  protected possibleScales = {
    "fibonacci": [1,2,3,5,8,13,21,34,'&#9749'],
    "tshirt": ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL', '&#10068', '&#9749'],
    "sequential": [1,2,3,4,5,6,7,8,9]
  }
  protected scale = [];
  protected theme: string;
  protected selectedScale: string; 

  constructor(
    private navCtrl: NavController,
    private store: Store<AppState>
  ) { 
    
  }

  ngOnInit() {
    this.subscribeToState();
  }

  private subscribeToState() {
    this.store.select(selectorSettings).subscribe(next => {
      this.theme = next.theme;
      this.selectedScale = next.scale;
      this.scale = this.possibleScales[this.selectedScale];
    });
  }

}
