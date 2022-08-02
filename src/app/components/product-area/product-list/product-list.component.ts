import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  public products: ProductModel[];
  constructor(private productsService: ProductsService) {}

  async ngOnInit(): Promise<void> {
    try {
      const products = await this.productsService.getAllProduct();
      console.log(products);
    } catch (err: any) {
      console.log(err.message);
    }
  }
}
