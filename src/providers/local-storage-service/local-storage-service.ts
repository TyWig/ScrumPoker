import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageServiceProvider {
  private appPrefix: string = "scrumpoker-"

  constructor() { }

  public getItem(key: string): string {
    const appKey = this.appPrefix + key;
    return localStorage.getItem(appKey);
  }

  public putItem(key: string, value: any) {
    const serializedItem = JSON.stringify(value);
    const newKey = this.appPrefix + key;
    localStorage.setItem(newKey, serializedItem);
    return;
  }
}
