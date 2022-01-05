import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Stock } from './stock';
import { StockService } from './stock.service';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit {

  stocks!: Stock[];
  stock: Stock = new Stock();
  constructor(private stockService: StockService, private router: Router,) { }

  ngOnInit() {
    this.stockService.getStocks().subscribe(data => {
      console.log(data);
      this.stocks = data;
    })
  }
  stockDetails(id: String) {
    this.router.navigate(['stocks', id]);
    console.log(id);

  }

}