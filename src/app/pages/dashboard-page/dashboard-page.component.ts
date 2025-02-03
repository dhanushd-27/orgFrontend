import { Component } from '@angular/core';
import { OrgCardComponentComponent } from '../../components/org-card-component/org-card-component.component';
import { DashboardHeaderComponent } from '../../components/dashboard-header/dashboard-header.component';

@Component({
  selector: 'app-dashboard-page',
  imports: [OrgCardComponentComponent, DashboardHeaderComponent],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.css'
})
export class DashboardPageComponent {

}
