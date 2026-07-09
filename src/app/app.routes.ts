import { Routes } from '@angular/router';
import { Home } from '@pages/components/home/home';

export const routes: Routes = [
    {
      path: 'home',
      component: Home,

    }, 
    {
    path: 'search',
    component: Home
  },
   {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
