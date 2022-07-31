import {
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css'],
})
export class ClockComponent implements OnInit, OnChanges, DoCheck, OnDestroy {
  public time: string; // if it wasn't "strictNullChecks": false , must add: ?
  private timerId: number;
  //Object has been created - Lifecycle Hook -
  constructor() {}

  //Component ready for use - Lifecycle Hook -
  ngOnInit(): void {
    const now = new Date();
    this.time = now.toLocaleTimeString();
    this.timerId = window.setInterval(() => {
      const now = new Date();
      this.time = now.toLocaleDateString();
    }, 1000);
  }

  // Component got new data from outside
  ngOnChanges(): void {
  }
  // Change Detection mechanism kicks in
  ngDoCheck(): void {}
  ngOnDestroy(): void {
    window.clearInterval(this.timerId)
  }
}
