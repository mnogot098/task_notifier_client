import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_ENDPOINTS } from '../constants';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private http: HttpClient) {

  }

  getAllTasks(): Observable<any> {
    return this.http.get<any>(environment.ApiUrl+API_ENDPOINTS.LIST_TASKS);
  }
}
