import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <p>Bienvenidos a angular</p>
    <h3>{{"Counter: " + counter}}</h3>
    <button (click)="modifyCounter(+1)">+1</button>
    <button (click)="resetCounter()">Reset</button>
    <button (click)="modifyCounter(-1)">-1</button>
  `
})

export class CounterComponent {

  public counter:number = 10;

  constructor() { }

  public modifyCounter(value: number): void{
    this.counter += value;
  }

  public resetCounter(): void{
    this.counter = 10;
  }




}
