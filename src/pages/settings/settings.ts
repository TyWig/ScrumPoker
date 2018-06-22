import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ThemeServiceProvider } from '../../providers/theme-service/theme-service';
import { Store } from '@ngrx/store';
import { AppState, selectorSettings } from '../../store/reducer';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage implements OnInit {
  savedTheme: string;
  private state: Observable<AppState>;

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private themeService: ThemeServiceProvider,
    private store: Store<AppState>
  ) {

  }


  ngOnInit() {
    this.store.select(selectorSettings).subscribe(next => {
      this.savedTheme = next.theme;
    });
  }

  ionViewDidLoad() {
  
  }

  onThemeChange(event: any) {
    console.log(event);
  }

}
