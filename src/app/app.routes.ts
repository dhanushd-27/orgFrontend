import { Routes } from '@angular/router';
import { OrgComponent } from './pages/org/org.component';

export const routes: Routes = [
  {
    path: "org",
    component: OrgComponent
  },
  {
    path: "",
    component: OrgComponent
  }
];
