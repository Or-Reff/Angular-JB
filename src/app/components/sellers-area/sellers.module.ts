import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SellersComponent } from './sellers/sellers.component';
import { RetailersComponent } from './retailers/retailers.component';
import { WholesalersComponent } from './wholesalers/wholesalers.component';



@NgModule({
  declarations: [
    SellersComponent,
    RetailersComponent,
    WholesalersComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SellersModule { }
