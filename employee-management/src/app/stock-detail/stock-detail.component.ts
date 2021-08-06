import { Component, OnInit } from '@angular/core';
import { StockData } from 'src/services/stock-data';

import { Observable } from "rxjs";

@Component({
  selector: 'stock-detail',
  templateUrl: './stock-detail.component.html',
  styleUrls: ['./stock-detail.component.css']
})
export class StockDetailComponent {

  pricechange: string;
  pricepercentchange: string;
  constructor( private _stockData: StockData) { 
    this._stockData.getData().subscribe((res) => {
      this.pricechange = res.data.pricechange;
      this.pricepercentchange = res.data.pricepercentchange;
    })
    
  }


}
