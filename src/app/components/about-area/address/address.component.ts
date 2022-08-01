import { Component, OnInit } from '@angular/core';
import { ColorService } from 'src/app/services/colors/colors.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css'],
})
export class AddressComponent implements OnInit {
    public styles= {
        backgroundColor:""
    }
  constructor(private colorService:ColorService) { 
  }

  ngOnInit(): void {
    // Define new color service (like objects)
    // const colorService = new ColorService();
    this.styles.backgroundColor = this.colorService.getRandomColor();
  }

}
