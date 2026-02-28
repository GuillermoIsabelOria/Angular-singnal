import { RouterOutlet } from '@angular/router';
import { Component, signal } from '@angular/core';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './hero-page.component.html',
})
export class HeroPageComponent {

  name = signal('Ironman');
  age = signal(45);

  getHeroDescription() : string {
    return `El héroe ` + this.name() + ' tiene una edad de ' + this.age() + ' años.';
  }

  changeHero(){
    this.name.set('Spiderman');
    this.age.set(22);
  }

  resetForm(){

    this.name.set('Ironman');
    this.age.set(45);
  }

  changeAge(){
    this.age.set(60);

  }



}
