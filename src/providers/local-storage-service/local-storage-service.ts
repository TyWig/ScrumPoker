import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class LocalStorageServiceProvider {
  private appPrefix: string = "scrumpoker-"

  constructor(
    private storage: Storage
  ) { }

  public getItem(key: string): Promise<string> {
    const appKey = this.appPrefix + key;
    return this.storage.get(appKey);
  }

  public putItem(key: string, value: any): Promise<any> {
    const serializedItem = JSON.stringify(value);
    const newKey = this.appPrefix + key;
    return this.storage.set(newKey, serializedItem);
  }
}
