import { Component } from '@angular/core';

@Component({
  // app-heroes-list
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'Ironman';
  public age: number = 45;

  // getter
  get capitalizedName(): string{
    return this.name.toUpperCase();
  }

  // methods
  getHeroeDescription(): string{
    return `${this.name} - ${this.age}`;
  }

  changeHero(): void{
    this.name = 'spiderman';
  }

  changeAge(): void{
    this.age = 30;
  }

  resetForm(): void{
    // this.name = 'Ironman';
    this.age = 45;
  }
}
