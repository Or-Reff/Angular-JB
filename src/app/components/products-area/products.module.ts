import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductListComponent } from './product-list/product-list.component';



@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailsComponent,
    ProductCardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductsModule { }
