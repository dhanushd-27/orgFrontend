import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./pages/org/org.component').then(m => m.OrgComponent)
  },
  // {
  //   path: 'orgs',
  //   loadComponent: () => import('./pages/org/org.component').then(m => m.OrgComponent)
  // }
];
