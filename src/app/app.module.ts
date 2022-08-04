import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { LayoutModule } from './components/layout-area/layout.module';
import { LayoutComponent } from './components/layout-area/layout/layout.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AddProductComponent } from './components/products-area/add-product/add-product.component';
import { RegisterComponent } from './components/auth-area/register/register.component';
import { JwtInterceptor } from './services/jwt/jwt.interceptor';
@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    HttpClientModule, // AJAX Request
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: JwtInterceptor,
    multi: true
  }],
  bootstrap: [LayoutComponent]
})
export class AppModule {}
