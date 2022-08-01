import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { AddressComponent } from './address/address.component';

@NgModule({
  declarations: [AboutComponent, AddressComponent],
  imports: [CommonModule],
  exports: [AboutComponent],
  // put services
//   providers: [ColorService],
})
export class AboutModule {}
