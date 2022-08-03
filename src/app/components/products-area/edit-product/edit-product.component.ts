import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductModel } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css'],
})
export class EditProductComponent implements OnInit {
  public product: ProductModel;

  public productForm: FormGroup; // <form>
  public nameControl: FormControl; // <input>
  public priceControl: FormControl; // <input>
  public stockControl: FormControl; // <input>
  public imageControl: FormControl; // <input>

  @ViewChild('imageControl')
  public imageWrapper: ElementRef<HTMLInputElement>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductsService,
    private router: Router
  ) {}

  async ngOnInit() {
    try {
      const id = this.activatedRoute.snapshot.params['productId'];
      this.product = await this.productService.getOneProduct(id);
      this.nameControl = new FormControl(this.product.name); //right side is default value
      this.priceControl = new FormControl(this.product.price);
      this.stockControl = new FormControl(this.product.stock);
      this.imageControl = new FormControl();
      this.productForm = new FormGroup({
        nameControl: this.nameControl,
        priceControl: this.priceControl,
        stockControl: this.stockControl,
        imageControl: this.imageControl,
      });
    } catch (e) {
      console.log(e);
    }
  }

  public async send() {
    try {
      this.product.name = this.nameControl.value;
      this.product.price = this.priceControl.value;
      this.product.stock = this.stockControl.value;
      this.product.image = this.imageControl.value;
      await this.productService.updateProduct(this.product);
      alert('Product has been updated 👌');
      this.router.navigateByUrl("/products/details/" + this.product.id);
    } catch (err: any) {
      alert(err.message);
    }
  }
}
