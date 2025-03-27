import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { User } from '../types/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly http: HttpClient = inject(HttpClient);

  login(email: string, password: string): Observable<User> {
    const body = JSON.stringify({ email, password });
    console.log(body);
    
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    // Assuming environment.API_AUTH contains the API URL for login
    return this.http.post<User>(`${environment.API_AUTH}login`, body, { headers });
  }
}
