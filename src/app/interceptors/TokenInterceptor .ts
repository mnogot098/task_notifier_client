import {
  HttpErrorResponse,
  HttpHandlerFn,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { catchError, throwError } from 'rxjs';
import { AuthService } from '../services/auth.service';

let authService: AuthService;
let router: Router;
export const tokenInterceptorFn: HttpInterceptorFn = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
) => {
  authService = inject(AuthService);
  router = inject(Router);

  const token = authService.getAuthToken();

  if (token) {
    const decoded: any = jwtDecode(token);
    const now = Math.floor(new Date().getTime() / 1000);
    if (decoded.exp < now) {
      authService.setAuthToken(null);
      return throwError(() => new Error('Token expired'));
    }

    req = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`),
    });
  }

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      let errorMsg = '';
      if (error.error instanceof ErrorEvent) {
        errorMsg = `Client Error: ${error.error.message}`;
      } else {
        errorMsg = `Server Error Code: ${error.status}, Message: ${error.message}`;
        if (error.status === 401) {
          authService.setAuthToken(null);
          window.location.href = '/login';
        }
      }

      console.error(errorMsg);
      return throwError(() => errorMsg);
    })
  );
};
