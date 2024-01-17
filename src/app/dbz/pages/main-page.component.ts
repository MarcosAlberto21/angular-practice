import { Component } from '@angular/core';
import { Guest } from '../interfaces/guest.interface';


@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent  {

  public guests: Guest[] = [
    {
      name: 'Goku',
      power: 15000
    },
    {
      name: 'Vegeta',
      power: 7500
    },
    {
      name: 'Krillin',
      power: 5000
    },
    {
      name: 'Piccolo',
      power: 5000
    },
    {
      name: 'Gohan',
      power: 5000
    },
    {
      name: 'Trunks',
      power: 5000
    },
  ];
}
