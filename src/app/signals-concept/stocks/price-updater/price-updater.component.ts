import { Component, inject, OnInit } from '@angular/core';
import { StockService } from '../../stock.service';

@Component({
  selector: 'app-price-updater',
  imports: [],
  templateUrl: './price-updater.component.html',
  styleUrl: './price-updater.component.css'
})
export class PriceUpdaterComponent implements OnInit {

  stockService = inject(StockService);

  ngOnInit(): void {
    setInterval(() => {
      console.log('interval log')
      this.stockService.getStocks().update((stocks) =>
        stocks.map((stock) => ({
          ...stock,
          stockPrice: stock.stockPrice + (Math.random() > 0.5 ? 1 : 0)
        }))
        
      );
      //   stocks.forEach((stock) => {

      //     stock.stockPrice = stock.stockPrice + (Math.random() > 0.5 ? 1 : 0);
      //   })
      // }, 3000);
    },3000);
  }

}
