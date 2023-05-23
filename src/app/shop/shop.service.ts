import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pagination } from '../shared/models/pagination';
import { Product } from '../shared/models/product';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  baseUrl = 'http://127.0.0.1:8000/';
  constructor(private _http: HttpClient) { }

  getProducts() {
    console.log(this.baseUrl + 'products');
    
    return this._http.get<Pagination<Product[]>>(this.baseUrl + 'products');
  }
}
