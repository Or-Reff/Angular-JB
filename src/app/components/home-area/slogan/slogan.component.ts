import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slogan',
  templateUrl: './slogan.component.html',
  styleUrls: ['./slogan.component.css'],
})
export class SloganComponent implements OnInit {
  //gets outside the component
  @Input() // @ means annotation
  public slogan: string;

  constructor() {}

  ngOnInit(): void {}
}
