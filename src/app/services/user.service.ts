import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';





@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }


  createNewUser(user:User): Observable<any>{
    let userUrl:string = "http://localhost:8085/users/user"
    return this.http.post(userUrl,user);
  }

  getUser(cid: number) : Observable<User[]>{
    let url:string = "http://localhost:8085/users/user?cid=" + cid;
    return this.http.get<User[]>(url);
  }

  saveUser(user: User): Observable<User>{
    let url : string = "http://localhost:8085/users/user"
    return this.http.post<User>(url, user);
  }
  
  findAllUsers(): Observable<User[]>{
    let url : string = "http://localhost:8085/users"
    return this.http.get<User[]>(url)

  }
}
