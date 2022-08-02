import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { LayoutModule } from './components/layout-area/layout.module';
import { LayoutComponent } from './components/layout-area/layout/layout.component';
import { ProductListComponent } from './components/product-area/product-list/product-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductCardComponent } from './products-area/product-card/product-card.component';
@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    HttpClientModule, // AJAX Request
  ],
  providers: [],
  bootstrap: [LayoutComponent],
  declarations: [ProductListComponent, ProductCardComponent],
})
export class AppModule {}
