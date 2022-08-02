import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { LayoutModule } from './components/layout-area/layout.module';
import { LayoutComponent } from './components/layout-area/layout/layout.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    HttpClientModule, // AJAX Request
  ],
  providers: [],
  bootstrap: [LayoutComponent]
})
export class AppModule {}
