import { Injectable, signal } from '@angular/core';
import { Stock } from '../models/stock';

@Injectable({
  providedIn: 'root'
})
export class StockService {
  stocks = signal<Stock[]>([])

  constructor(){
    this.stocks.set([
      {companyName:'CTS',stockPrice:101.5},
      {companyName:'Infosys',stockPrice:55.5},
      {companyName:'Mphasis',stockPrice:55.5},
    ])
  }

  getStocks(){
    return this.stocks;
  }

  updateStockPrice(stock : Stock){    
    this.stocks.set([...this.stocks(),stock]);
  }


}
