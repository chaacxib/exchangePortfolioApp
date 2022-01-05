import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Stock } from './stock';
import { StockService } from './stock.service';
import { ChartDataset } from 'chart.js';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit {
  data!: string;
  stocks!: Stock[];
  stock: Stock = new Stock();
  chartOptions = {
    type: 'line',
    animation: false,
    plugins: {
      legend: {
          display: true,
          labels: {
              color: '#fff'
          }
      }
    },
    scales: {
      x: {
        grid: {
          display: false
        },
        ticks: {
          display: false
        }
      },
      y: {
        ticks: {
          color: '#fff',
        },
        grid: {
          display: false
        }
      }
    }
  };

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

  renderChartData(stock: Stock) {
    const data = {
      labels: Array(...Array(stock.market_value.length).keys()),
      datasets: [{
        type: 'line',
        label: stock.symbol.toUpperCase(),
        data: stock.market_value,
        fill: false,
        borderColor: 'rgb(35, 193, 188)',
        tension: 0.1,
      }]
    };
    return data;
  }

}