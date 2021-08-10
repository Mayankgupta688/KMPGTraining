import { Component, OnInit } from '@angular/core';
import { EventHandlerService } from '../services/event-handler.service';

@Component({
  selector: 'event-emitter-replier',
  templateUrl: './event-emitter-replier.component.html',
  styleUrls: ['./event-emitter-replier.component.css']
})
export class EventEmitterReplierComponent implements OnInit {
  sbiStockData: any = null;
  constructor(private _emitter: EventHandlerService) { 
    
    this._emitter.eventEmitter.subscribe((response) => {
      if(response.name == "EventOne") {
        alert(response.data);
      }
    })

    this._emitter.stockEventEmitter.subscribe((response) => {
      if(response.name == "StockData") {
        this.sbiStockData = response.data
      }
    })


    setTimeout(() => {
      this._emitter.eventEmitter.emit({
        name: "EventTwo",
        data: "20 Seconds Done...."
      })
    }, 20000);



  }

  ngOnInit(): void {
  }

}
