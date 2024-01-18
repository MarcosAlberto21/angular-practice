import { Injectable } from '@angular/core';
import { v4 as uuid} from 'uuid';



import { Guest } from '../interfaces/guest.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {


  public guests: Guest[] = [
    {
      name: 'Goku',
      power: 15000,
      id: uuid()
    },
    {
      name: 'Vegeta',
      power: 7500,
      id: uuid()
    },
    {
      name: 'Krillin',
      power: 5000,
      id: uuid()
    },
    {
      name: 'Piccolo',
      power: 5000,
      id: uuid()
    },
    {
      name: 'Gohan',
      power: 5000,
      id:  uuid()
    },
    {
      name: 'Trunks',
      power: 5000,
      id: uuid()
    },
  ];

  public guest : Guest = {
    name: '',
    power: 0,
    id: ''
  };

  // methods
  onNewGuest(guest: Guest): void {
    console.log("MainPage");
    const newGuest = {
      ...guest,
      id: uuid()
    };
    this.guests.push(newGuest);
    this.guest = {
      name: '',
      power: 0,
      id: ''
    };
  }

  onSelectedGuest(guest: Guest): void {
    console.log("On selected");
    console.log(guest);
    this.guest = guest;
  }

  onDeleteGuest(id: string): void {
    console.log("On delete");
    this.guests = this.guests.filter(guest => guest.id !== id);
  }
}
