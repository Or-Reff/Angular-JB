import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-discount',
  templateUrl: './discount.component.html',
  styleUrls: ['./discount.component.css']
})
export class DiscountComponent implements OnInit {
    public classes = {
        underlined: this.fiftyFifty(),
        bolded: this.fiftyFifty()
    };
    private fiftyFifty(): boolean{
        return Math.random() < 0.5;
    }
    public styles = {
        color: this.fiftyFifty() ? "Red" : "Green",
        fontWeight: this.fiftyFifty() ? "Bold" : null,
    }
  constructor() { }

  ngOnInit(): void {
  }

}
