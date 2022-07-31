import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
//   encapsulation: ViewEncapsulation.None
})
export class MenuComponent implements OnInit {
    fruits: string[] = ['Apple', 'Orange', 'Banana'];


    constructor() {

     }

  ngOnInit(): void {

  }

}
