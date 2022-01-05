import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockService {
  public baseUrl = "https://4q5aiyq1ii.execute-api.us-east-1.amazonaws.com/default/stocks/";

  constructor(private httpClient: HttpClient) { }

  public getStocks(): Observable<any> {
    return this.httpClient.get(this.baseUrl);
  }
}
