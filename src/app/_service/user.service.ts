import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../_models';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  url:string = environment.apiUrl+"/api/users/"

  public viewall():Observable<User[]>{
    return this.http.get<User[]>(this.url)
  }

  public view(id:number):Observable<User>{
    console.log(`${this.url}${id}`)
    return this.http.get<User>(`${this.url}${id}`)
  }

  public create(userObject:User):Observable<User>{
    return this.http.post<User>(this.url, userObject)
  }

  public update(userObject:User, id:number):Observable<User>{
    return this.http.put<User>(`${this.url}${id}/` ,userObject)
  }

  public remove(id:number):Observable<User>{
    return this.http.delete<User>(`${this.url}${id}/`)
  }
}
