import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Pagination } from './models/pagination';
import { Product } from './models/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  products: Product[] = [];
  error: any = null;
  constructor(private _http: HttpClient) {}

  ngOnInit(): void {
    this._http.get<Pagination<Product[]>>('http://127.0.0.1:8000/products/').subscribe({
      next: (response) => {
        this.products = response.results;
      },
      error: (response) => {
        this.error = response.error;
      },
      complete: () => {
        console.log('Data loaded');
      },
    });
  }
  title = 'e-commerce-angular';
}
