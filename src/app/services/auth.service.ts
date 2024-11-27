import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { API_ENDPOINTS } from '../constants';
import { Auth } from '../models/Auth';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

  login(user:Auth): Observable<any> {
    return this.http.post<any>(environment.ApiUrl+API_ENDPOINTS.LOGIN, user);
  }

  register(user:User): Observable<any> {
    return this.http.post<any>(environment.ApiUrl+API_ENDPOINTS.REGISTER, user);
  }
}
