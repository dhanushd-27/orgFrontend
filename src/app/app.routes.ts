import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./pages/dashboard-page/dashboard-page.component').then(m => m.DashboardPageComponent)
  },
  {
    path: 'signup',
    loadComponent: () => import('./components/sign-up/sign-up.component').then(m => m.SignUpComponent)
  },
  {
    path: 'login',
    loadComponent: () => import('./components/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: "create-org",
    loadComponent: () => import('./pages/create-org/create-org.component').then(m => m.CreateOrgComponent)
  },
  {
    path: 'org-details',
    loadComponent: () => import('./pages/org-details/org-details.component').then(m => m.OrgDetailsComponent)
  }
  // {
  //   path: 'orgs',
  //   loadComponent: () => import('./pages/org/org.component').then(m => m.OrgComponent)
  // }
];
