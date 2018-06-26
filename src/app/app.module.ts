import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ComponentsModule } from '../components/components.module';
import { HttpClientModule } from '@angular/common/http';
import { NumberDisplayPageModule } from '../pages/number-display/number-display.module';
import { SettingsPageModule } from '../pages/settings/settings.module';
import { AppSettingsServiceProvider } from '../providers/app-settings-service/app-settings-service';
import { LocalStorageServiceProvider } from '../providers/local-storage-service/local-storage-service';
import { StoreModule } from '@ngrx/store';
import { settingsReducer } from '../store/reducer';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ComponentsModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    StoreModule.forRoot({settings: settingsReducer}),
    HttpClientModule,
    NumberDisplayPageModule,
    SettingsPageModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AppSettingsServiceProvider,
    LocalStorageServiceProvider, 
  ]
})
export class AppModule {}
