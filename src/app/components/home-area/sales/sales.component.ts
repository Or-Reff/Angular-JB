import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {

    public weekendSaleItem = "Pizza";
    public totalItemsOnSale = 5;
    public dessertsSale = ['Cupcakes', 'Pie' , 'Icecream','Chocolate Cake']
    public isWeekend(): boolean{
        const now = new Date();
        const dayOfWeek = now.getDay() + 1;
        return dayOfWeek >= 6;

    }
  constructor() { }

  ngOnInit(): void {
  }

}
