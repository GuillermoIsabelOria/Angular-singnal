import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Nav } from './components/nav/nav-bar';
import { Footer } from './components/footer/footer';
import { HeroPageComponent } from './pages/hero/hero-page.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Nav, Footer, HeroPageComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {


}
