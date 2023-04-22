import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Auth } from '../_models';
import jwtDecode from 'jwt-decode';
import * as dayjs from 'dayjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient, private router:Router) { }

  public login(username:string, password:string):Observable<Auth>{
    return this.http.post<Auth>(`${environment.apiUrl}/${environment.loginUrl}/`, {username, password})
  }

  public logout():void{
    localStorage.removeItem('token');
    localStorage.removeItem('refresh');

    this.router.navigate(['/login/']);
  }


  public refreshToken():Observable<any>{
    const refresh = localStorage.getItem('refresh')
    return this.http.post<any>(`${environment.apiUrl}/${environment.jwtRefresh}/`, refresh)
  }

  public isAuthenticated():boolean{
    const token = localStorage.getItem('token')
    if (token){
      const decodeToken : any = jwtDecode(token);
      let exp = decodeToken.exp
      const isExpired = dayjs(exp).diff(dayjs()) < 1;
      if (!isExpired){
        return true;
      }else{
        this.refreshToken().subscribe(
          response =>{
            localStorage.setItem("token", response.access)
            localStorage.setItem("refresh", response.refresh)
          }
        )
        return true;
      }
    }
    return false
  }
}
