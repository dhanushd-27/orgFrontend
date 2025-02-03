import { Component } from '@angular/core';
import { OrgHeaderComponent } from '../../components/org-header/org-header.component';
import { OrgCardComponentComponent } from '../../components/org-card-component/org-card-component.component';

@Component({
  selector: 'app-org-details',
  imports: [OrgHeaderComponent, OrgCardComponentComponent],
  templateUrl: './org-details.component.html',
  styleUrl: './org-details.component.css'
})
export class OrgDetailsComponent {

}
