import { Component, Input, Output, SimpleChanges } from '@angular/core';
import { EventEmitter } from '@angular/core';

import { Guest } from '../../interfaces/guest.interface';
@Component({
  selector: 'dbz-add-guest',
  templateUrl: './add-guest.component.html',
  styleUrl: './add-guest.component.css'
})

export class AddGuestComponent {

  @Output()
  public onNewGuest : EventEmitter<Guest> = new EventEmitter();

  @Input()
  public guest: Guest = {} as Guest;

  emitChangeGuest(): void {
    console.log(this.guest);
    if (this.guest.name.trim().length === 0) return;
    this.onNewGuest.emit(this.guest);
    this.guest = {
      name: '',
      power: 0,
      id: ''
    };
  }

  // verifica si cambia el valor de guest
  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes',changes);
  }

}
