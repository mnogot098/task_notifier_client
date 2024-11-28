import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Auth } from '../models/Auth';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { API_ENDPOINTS } from '../constants';
import { User } from '../models/User';
import { jwtDecode } from "jwt-decode";


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLoggedIn = new BehaviorSubject<boolean>(false);
  currentLoggedInStatus = this.isLoggedIn.asObservable();

  constructor(private http: HttpClient) {}

  updateLoggedInStatus(status: boolean) {
    this.isLoggedIn.next(status);
  }

  login(user: Auth): Observable<any> {
    return this.intercept(
      'post',
      environment.ApiUrl + API_ENDPOINTS.LOGIN,
      user
    );
  }

  register(user: User): Observable<any> {
    return this.intercept(
      'post',
      environment.ApiUrl + API_ENDPOINTS.REGISTER,
      user
    );
  }

  getAuthToken(): string | null {
    return window.localStorage.getItem('token');
  }

  setAuthToken(user: any): void {
    if (user && user.token) {
      window.localStorage.setItem('user', JSON.stringify(user));
      window.localStorage.setItem('token', user.token);
      this.updateLoggedInStatus(true);
    } else {
      window.localStorage.removeItem('user');
      window.localStorage.removeItem('token');
      this.updateLoggedInStatus(false);
    }
  }

  isTokenExpired(token: string): boolean {
    alert('called expiration ')
    try {
      const decoded: any = jwtDecode(token);
      const now = Math.floor(new Date().getTime() / 1000);
      return decoded.exp < now;
    } catch (error) {
      console.error('Error decoding token', error);
      return true;
    }
  }

  intercept(method: string, url: string, data: any): Observable<any> {
    let headers = new HttpHeaders();
    const token = this.getAuthToken();
    if (token) {
      headers = headers.set('Authorization', 'Bearer ' + token);
    }

    switch (method.toLowerCase()) {
      case 'get':
        return this.http.get(url, { headers });
      case 'post':
        return this.http.post(url, data, { headers });
      case 'put':
        return this.http.put(url, data, { headers });
      case 'delete':
        return this.http.delete(url, { headers });
      default:
        throw new Error(`Unsupported request method: ${method}`);
    }
  }
}
