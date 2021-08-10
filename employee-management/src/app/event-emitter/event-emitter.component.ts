import { Component, EventEmitter } from '@angular/core';

import { EventHandlerService } from '../services/event-handler.service';

@Component({
  selector: 'event-emitter',
  templateUrl: './event-emitter.component.html',
  styleUrls: ['./event-emitter.component.css']
})
export class EventEmitterComponent {
  sbiStockData: any = null;
  constructor(private _emitter: EventHandlerService) { 
    setTimeout(() => {
      this._emitter.eventEmitter.emit({
        name: "EventOne",
        data: "10 Seconds Done...."
      })
    }, 10000);

    this._emitter.eventEmitter.subscribe((response) => {
      if(response.name == "EventTwo") {
        alert(response.data);
      }
    })

    this._emitter.stockEventEmitter.subscribe((response) => {
      if(response.name == "StockData") {
        this.sbiStockData = response.data
      }
    })
    

  }

}
