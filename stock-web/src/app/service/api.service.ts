import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { StockItem } from '../model/stock-item';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  baseUri = 'http://localhost:4000/api';
  stockItemsUri = 'http://localhost:4000/api/stockitems';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  // Create stock item
  createStockItem(stockItem: StockItem): Observable<any> {
    const url = `${this.stockItemsUri}`;
    return this.http.post(url, stockItem)
      .pipe(
        catchError(this.errorMgmt)
      );
  }

  // Get all stock items
  getStockItems(selectedPage: string): Observable<StockItem[]> {
    return this.http.get(`${this.stockItemsUri}`, {params: { page: selectedPage}}).pipe(
      map(res => {
      // tslint:disable-next-line:no-string-literal
      return res['data'].docs as StockItem[];
    }));
  }

  // Get all stock items data
  getStockItemsData(selectedPage: string): Observable<any> {
    return this.http.get(`${this.stockItemsUri}`, {params: { page: selectedPage}}).pipe(
      map(res => {
      // tslint:disable-next-line:no-string-literal
      return res['data'] || {};
    }));
  }

  // Get stock item
  getStockItem(id): Observable<StockItem> {
    const url = `${this.stockItemsUri}/${id}`;
    return this.http.get(url, {headers: this.headers}).pipe(
      map(res => {
        // tslint:disable-next-line:no-string-literal
        return res['data'] as StockItem;
      }),
      catchError(this.errorMgmt)
    );
  }

  // Update stock item
  updateStockItem(stockItem: StockItem) {
    const url = `${this.stockItemsUri}`;
    return this.http.put(url, stockItem, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    );
  }

  // Delete stock item
  deleteStockItem(id: string): Observable<any> {
    const url = `${this.stockItemsUri}/${id}`;
    return this.http.delete(url, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    );
  }

  // for Errors
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
