import { Component , Input, Output, EventEmitter} from '@angular/core';
import { Guest } from '../../interfaces/guest.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  // emitters
  @Input()
  public guests: Guest[] = [];

  @Output()
  public onSelectedGuest : EventEmitter<Guest> = new EventEmitter();

  @Output()
  public onDeleteGuest : EventEmitter<string> = new EventEmitter();

  // methods
  selectGuest(guest: Guest): void {
    this.onSelectedGuest.emit(guest);
  }

  deleteGuest(id: string): void {
    this.onDeleteGuest.emit(id);
  }
}
