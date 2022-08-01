import { Component, OnInit } from '@angular/core';
import { ColorService } from 'src/app/services/colors/colors.service';

@Component({
  selector: 'app-random-sale',
  templateUrl: './random-sale.component.html',
  styleUrls: ['./random-sale.component.css']
})

export class RandomSaleComponent implements OnInit {
    public styles= {
        backgroundColor:""
    }
    public itemsOnSale = ["tv","phone","email","password"]
    public id:number;
    public randomElement = this.itemsOnSale[Math.floor(Math.random() * this.itemsOnSale.length)];
    
    
  constructor(private colorService: ColorService) { }

  ngOnInit(): void {
    // console.log(this.randomElement);
    this.styles.backgroundColor = this.colorService.getRandomColor();

    // let randomElement = this.itemsOnSale[Math.floor(Math.random() * this.itemsOnSale.length)];
    this.id = window.setInterval(() => {
        this.randomElement = this.itemsOnSale[Math.floor(Math.random() * this.itemsOnSale.length)];
        this.styles.backgroundColor = this.colorService.getRandomColor();
    }, 5000);
    
  }
  
  ngOnDestroy() {
    if (this.id) {
      clearInterval(this.id);
    }
  }

}
