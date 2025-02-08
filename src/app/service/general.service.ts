import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { HotToastService } from '@ngxpert/hot-toast';
import { catchError, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class GeneralService {
  http = inject(HttpClient);
  toast = inject(HotToastService);
  private baseUrl = 'http://localhost:3003/api/v1';

  constructor() { }

  signUpUser(body: { name: string, email: string; password: string; }){
    this.http.post(`${this.baseUrl}/signup`, body).pipe(
      catchError((error) => {
        this.toast.error('Error while signing up');
        return error;
      }
    ))
    .subscribe((response: any) => {
      if(response.status === 200){
        this.toast.success('User signed up successfully');
      }
      return response;
    });
  }
}
