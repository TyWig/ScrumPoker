import { Injectable, OnInit } from '@angular/core';
import { LocalStorageServiceProvider } from '../local-storage-service/local-storage-service';
import { AppState } from '../../store/reducer';
import { Store } from '@ngrx/store';
import { UpdateTheme, UpdateScale } from '../../store/actions';

@Injectable()
export class AppSettingsServiceProvider {
  
  constructor(
    private storageService: LocalStorageServiceProvider,
    private store: Store<AppState>
  ) { }

  public setTheme(theme: string) {
    this.storageService.putItem('theme', theme);
    this.store.dispatch(new UpdateTheme({theme}));
  }

  public setNumberScale(scale: string) {
    this.storageService.putItem('scale', scale);
    this.store.dispatch(new UpdateScale({scale}));
  }
}
