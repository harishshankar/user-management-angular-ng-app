import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { ErrorService } from '../_service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private router:Router, private errorService:ErrorService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse)=>{
        console.log(error)
        let errorMessage = 'Sorry, an error occurred. Please try again later.';
        if(error.error && error.error.detail){
          errorMessage = `Entered username or password is incorrect`;
          if(error.statusText === "Unauthorized" && error.error.code ==="token_not_valid"){
            localStorage.removeItem('token');
            localStorage.removeItem('refresh');
            this.router.navigate(['login'])
            errorMessage=error.error.detail
          }
        }
        this.errorService.errorMessage = errorMessage;
        return throwError(() => new Error(errorMessage));
      })
    )
  }
}
