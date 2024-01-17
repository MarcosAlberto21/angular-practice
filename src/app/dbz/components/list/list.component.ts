import { Component , Input} from '@angular/core';
import { Guest } from '../../interfaces/guest.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input()
  public guests: Guest[] = [];
}
