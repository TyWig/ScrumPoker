import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { LocalStorageServiceProvider } from '../local-storage-service/local-storage-service';
import { Subject } from 'rxjs/Subject';
import { AppState } from '../../store/reducer';
import { Store } from '@ngrx/store';
import { UpdateSettings } from '../../store/actions';

@Injectable()
export class ThemeServiceProvider {
  private theme$: Subject<string> = new Subject<string>();

  constructor(
    private http: HttpClient,
    private storageService: LocalStorageServiceProvider,
    private store: Store<AppState>
  ) {
    const savedTheme = this.storageService.getItem('theme');
    this.theme$.next(savedTheme ? savedTheme : 'primary')
  }

  public setTheme(theme: string) {
    this.store.dispatch(new UpdateSettings({theme: theme}));
  }
}
