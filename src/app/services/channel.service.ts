import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { API_ENDPOINTS } from '../constants';

@Injectable({
  providedIn: 'root',
})
export class ChannelService {
  constructor(private authService: AuthService) {}

  getAllChannels():Observable<any> {
    return this.authService.intercept(
      'get',
      environment.ApiUrl + API_ENDPOINTS.LIST_CHANNELS, null
    )
  }
}
