import { Component, OnInit } from '@angular/core';
import { productsStore } from 'src/app/redux/products-state';
import { Unsubscribe } from 'redux';

@Component({
  selector: 'app-total-products',
  templateUrl: './total-products.component.html',
  styleUrls: ['./total-products.component.css'],
})
export class TotalProductsComponent implements OnInit {
  public count: number;
  private unsubscribe: Unsubscribe;
  constructor() {}

  ngOnInit(): void {
    // number of products
    this.count = productsStore.getState().products.length;
    this.unsubscribe = productsStore.subscribe(() => {
      this.count = productsStore.getState().products.length;
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe();
  }
}
