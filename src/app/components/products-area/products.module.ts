import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductListComponent } from './product-list/product-list.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { SharedModule } from '../shared-area/shared.module';
import { TotalProductsComponent } from './total-products/total-products.component';



@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailsComponent,
    ProductCardComponent,
    AddProductComponent,
    EditProductComponent,
    TotalProductsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports:[
    TotalProductsComponent
  ]
})
export class ProductsModule { }
