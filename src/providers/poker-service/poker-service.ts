import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PokerServiceProvider {
  private num: Number;

  constructor(
    public http: HttpClient
  ) {

  }

  public setNum(num: Number) {
    this.num = num;
  }

  public getNum() {
    return this.num;
  }

}
