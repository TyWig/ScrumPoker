import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { SettingsPage } from '../pages/settings/settings';
import { Store } from '@ngrx/store';
import { AppState, selectorSettings } from '../store/reducer';
import { LocalStorageServiceProvider } from '../providers/local-storage-service/local-storage-service';
import { AppSettingsServiceProvider } from '../providers/app-settings-service/app-settings-service';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = HomePage;
  pages: Array<{title: string, component: any}>;
  private themes = [
    { theme: 'primary', color: '#' }
  ]

  constructor(
    private platform: Platform,
    private statusBar: StatusBar,
    private splashScreen: SplashScreen,
    private storageService: LocalStorageServiceProvider,
    private settingsService: AppSettingsServiceProvider,
    private store: Store<AppState>,
  ) {
    this.initializeApp();
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Settings', component: SettingsPage }
    ];
    this.store.select(selectorSettings).subscribe(next => {
      
    });
    this.setTheme();
    this.setScale();
  }

  private setTheme() {
    this.storageService.getItem('theme').then(res => {
      const theme = JSON.parse(res) || 'primary';
      this.settingsService.setTheme(theme);
    });
  }

  private setScale() {
    this.storageService.getItem('scale').then(res => {
      const scale = JSON.parse(res) || 'fibonacci';
      this.settingsService.setNumberScale(scale);
    })
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.show();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
