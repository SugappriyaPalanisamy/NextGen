import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private i = 0;
  title = 'nextGen';
  counter: number[] = [];

  constructor() {
    
  }
  ngOnInit(): void {
    this.splitCounter();
  }
  clickCounter(e: Event): void {
    if ((e.target as Element).classList.contains('reset'))
      return;
    this.i++
    this.splitCounter();
  }
  reset(): void {
    this.i = 0;
    this.splitCounter();
  }

  private splitCounter():void {
    this.counter = String(this.i).split("").map((num) => {
      return Number(num)
    });
  }
}
