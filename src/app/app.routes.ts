import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full',
  },
  {
    path: 'inicio',
    loadComponent: () =>
      import('./page/inicio/inicio.page').then(m => m.InicioPage),
  },
  {
    path: 'tienda',
    loadComponent: () =>
      import('./page/tienda/tienda.page').then(m => m.TiendaPage),
  },
];
