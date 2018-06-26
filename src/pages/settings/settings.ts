import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppSettingsServiceProvider } from '../../providers/app-settings-service/app-settings-service';
import { Store } from '@ngrx/store';
import { AppState, selectorSettings } from '../../store/reducer';

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
  selectedTheme: string;
  selectedScale: string;

  protected themes = [
    {theme: 'Primary', value: 'primary'},
    {theme: 'Dark', value: 'dark'},
    {theme: 'Light', value: 'light'},
    {theme: 'Party', value: 'party'}
  ];

  protected scales = [
    {scale: 'Fibonacci', value: 'fibonacci'},
    {scale: 'T-Shirt Sizes', value: 'tshirt'},
    {scale: 'Sequential', value: 'sequential'}
  ]

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private settingsService: AppSettingsServiceProvider,
    private store: Store<AppState>
  ) {

  }


  ngOnInit() {
    this.store.select(selectorSettings).subscribe(next => {
      this.selectedTheme = next.theme;
      this.selectedScale = next.scale;
    });
  }

  ionViewDidLoad() { }

  onThemeChange(theme: any) {
    this.settingsService.setTheme(theme);
  }

  onNumberScaleChange(scale: any) {
    this.settingsService.setNumberScale(scale);
  }

}
