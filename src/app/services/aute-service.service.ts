import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/api/login';

  constructor(private http: HttpClient) {}

  loginWithGoogle(token: string): Observable<any> {
    return this.http.post(this.apiUrl, { token });
  }

  logout(): Observable<any> {
    return this.http.post('http://localhost:3000/api/logout', {});
  }
}
