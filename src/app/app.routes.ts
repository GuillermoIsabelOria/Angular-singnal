import { Routes } from '@angular/router';
import { HeroPageComponent } from './pages/hero/hero-page.component';
import { App } from './pages/counter/counter.component';

export const routes: Routes = [

  {
    path: '',
    component: App
  },
  {
    path: 'hero',
    component: HeroPageComponent
  },
  {
    path: '**',
    redirectTo: ''
  }

];
