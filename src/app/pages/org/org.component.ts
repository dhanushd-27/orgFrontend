import { Component } from '@angular/core';
import { OrgHeaderComponent } from '../../components/org-header/org-header.component';
import { OrgCardComponentComponent } from '../../components/org-card-component/org-card-component.component';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "../../components/header/header.component";

@Component({
  selector: 'app-org',
  imports: [OrgCardComponentComponent, RouterOutlet],
  templateUrl: './org.component.html',
  styleUrl: './org.component.css'
})
export class OrgComponent {

}
