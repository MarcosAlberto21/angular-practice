import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AddGuestComponent } from './components/add-guest/add-guest.component';


@NgModule({
  declarations: [
    MainPageComponent,
    ListComponent,
    AddGuestComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    MainPageComponent
  ]
})
export class DbzModule { }
