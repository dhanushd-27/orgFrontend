import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'orgFrontend';

  private apiUrl = 'http://localhost:3000/api/v1'

  http = inject(HttpClient);

  $getUser = this.getUser();

  getUser() {
    return this.http.get<any>(`${this.apiUrl}/user/me`, {
      headers: {
        'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3OWRiMzFjMWYxYTlkMmMwYjI4NGY0OSIsImVtYWlsIjoia29iZUBnbWFpbC5jb20iLCJpYXQiOjE3MzgzODgyNjJ9.KX4sfhIXmGvABGLZcVDcQBSaJAqY_SHfe-yornWgX28'
      }
    });
  } 
}
