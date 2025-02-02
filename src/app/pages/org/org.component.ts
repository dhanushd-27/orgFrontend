import { Component } from '@angular/core';
import { OrgHeaderComponent } from '../../components/org-header/org-header.component';
import { OrgCardComponentComponent } from '../../components/org-card-component/org-card-component.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-org',
  imports: [OrgHeaderComponent, OrgCardComponentComponent, RouterOutlet],
  templateUrl: './org.component.html',
  styleUrl: './org.component.css'
})
export class OrgComponent {

}
