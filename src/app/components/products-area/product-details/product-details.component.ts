import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    // snapshot = current ulr
    // snapshot.params = route parameters declared in the routing
    const id = +this.activatedRoute.snapshot.params['productId'];
    console.log(typeof id);
    console.log(id);
  }

}
