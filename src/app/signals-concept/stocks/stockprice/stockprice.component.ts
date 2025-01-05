import { Component, inject, OnInit } from '@angular/core';
import { Stock } from '../../../models/stock';
import { StockService } from '../../stock.service';
import { CommonModule } from '@angular/common';
import { PriceUpdaterComponent } from '../price-updater/price-updater.component';

@Component({
  selector: 'app-stockprice',
  imports: [CommonModule,PriceUpdaterComponent],
  templateUrl: './stockprice.component.html',
  styleUrl: './stockprice.component.css'
})
export class StockpriceComponent implements OnInit{
  stocks : Stock[] = [];
  stockService = inject(StockService)

  ngOnInit(): void {
   
  }

  getStocks(){
    return this.stockService.getStocks()();
  }

}
