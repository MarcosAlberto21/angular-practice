import { Component, NgModule } from '@angular/core';
import { MessageInfoComponent } from '../../modals/message-info/message-info.component';





@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})

export class ListComponent {
  public heroNames: string[] = ['Ironman', 'Spiderman', 'Thor', 'Hulk', 'Capitán América']; // array
  public deleteHero?: string = '';

  removeLastHero(): void {
    this.deleteHero = this.heroNames.pop();
    console.log('deleteHero', this.deleteHero);
  }
}

