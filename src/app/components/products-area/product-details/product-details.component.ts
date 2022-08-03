import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductModel } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products/products.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  public product: ProductModel;
  public imageSource: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService,
    private router: Router
  ) {}

  async ngOnInit(): Promise<void> {
    // snapshot = current ulr
    // snapshot.params = route parameters declared in the routing
    try {
      const id = +this.activatedRoute.snapshot.params['productId'];
      this.product = await this.productsService.getOneProduct(id);
      this.imageSource =
        environment.productUrl + 'images/' + this.product.imageName;
    } catch (err: any) {
      alert(err.message);
    }
  }

  async deleteProduct() {
    try {
      await this.productsService.deleteProduct(this.product.id);
      alert('Product deleted111111111111');
      this.router.navigateByUrl("/products");
    } catch (err: any) {}
  }
}
