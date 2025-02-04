import { Component, input } from '@angular/core';

@Component({
  selector: 'app-user-profile-card',
  imports: [],
  templateUrl: './user-profile-card.component.html',
  styleUrl: './user-profile-card.component.css'
})
export class UserProfileCardComponent {
  name = input();
  email = input();
}
