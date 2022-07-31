import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  public tooltip = 'Search Entire website...';

  public searchWebsite(args: Event): void {
    console.log(args);
    alert('Searching...');
    this.textToSearch = "";
  }

  public textToSearch = '';

  constructor() {}

  ngOnInit(): void {}
}
