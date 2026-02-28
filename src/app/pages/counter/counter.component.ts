import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './counter.component.html',
})
export class App {
  contador = 10;
  counterSignal = signal(10);

  variation(value:number) {
    this.contador += value;
    this.counterSignal.update( current => current + value );
  }
  reset() {
    this.contador = 10;
    this.counterSignal.set(0);
  }




}
