import { Component, OnInit } from '@angular/core';
import { ShopService } from '../shop.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent implements OnInit {
  products: Product[] = [];
  error: string = '';
  constructor(private _shopService: ShopService) {}
  ngOnInit(): void {
    this._shopService.getProducts().subscribe({
      next: (response) => {
        this.products = response.results;
      },
      error: (err: any) => {
        this.error = err.message;
      },
    });
  }
}
