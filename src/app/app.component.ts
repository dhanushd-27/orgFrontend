import { Component } from '@angular/core';
import { OrgCardComponentComponent } from './components/org-card-component/org-card-component.component';
import { HeaderComponent } from './components/header/header.component';
import { OrgHeaderComponent } from './components/org-header/org-header.component';
import { MemberCardComponent } from './components/member-card/member-card.component';
import { UserProfileCardComponent } from './components/user-profile-card/user-profile-card.component';
import { RouterOutlet } from '@angular/router';
// import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [OrgCardComponentComponent, HeaderComponent, OrgHeaderComponent, MemberCardComponent, UserProfileCardComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'orgFrontend';
}
