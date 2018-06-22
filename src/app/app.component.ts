import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { SettingsPage } from '../pages/settings/settings';
import { ThemeServiceProvider } from '../providers/theme-service/theme-service';
import { Store } from '@ngrx/store';
import { AppState } from '../store/reducer';
import { Subject } from 'rxjs/Subject';
import { LocalStorageServiceProvider } from '../providers/local-storage-service/local-storage-service';
import { UpdateSettings } from '../store/actions';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = HomePage;
  pages: Array<{title: string, component: any}>;
  private unsubscribe$: Subject<void> = new Subject<void>();

  constructor(
    private platform: Platform,
    private statusBar: StatusBar,
    private splashScreen: SplashScreen,
    private storageService: LocalStorageServiceProvider,
    private store: Store<AppState>,
  ) {
    this.initializeApp();
    this.pages = [
      { title: 'Bidding', component: HomePage },
      { title: 'Settings', component: SettingsPage }
    ];
    this.setTheme();
  }

  private setTheme() {
    const savedTheme = this.storageService.getItem('theme') || 'primary';
    this.store.dispatch(new UpdateSettings({theme: savedTheme}));
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
