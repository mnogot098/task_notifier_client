import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { API_ENDPOINTS } from '../constants';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private authService: AuthService) {}

  getTasksByUser(userId: number): Observable<any> {
    return this.authService.intercept(
      'post',
      environment.ApiUrl + API_ENDPOINTS.LIST_TASKS,
      { userId }
    );
  }
}
