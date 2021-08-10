import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventHandlerService {
  eventEmitter = new EventEmitter();
  stockEventEmitter = new EventEmitter();
  constructor(private httpClient: HttpClient) { 
    setInterval(() => {
      this.httpClient.get("https://priceapi.moneycontrol.com/pricefeed/bse/equitycash/SBI").subscribe((res: any) => {
        this.stockEventEmitter.emit({
          name: "StockData",
          data: res.data
        })
      })
    }, 5000)
  }
}
