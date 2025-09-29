import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn(): boolean {
  if (typeof window !== 'undefined') { 
    return !!localStorage.getItem('token');
  }
  return false; 
}

  private baseUrl='http://localhost:5001/api'

  constructor(private http:HttpClient) { }

  registerUser(user:any):Observable<any>{
    return this.http.post(`${this.baseUrl}/auth/register`,user)
    
  }
  loginUser(user:any):Observable<any>{
    return this.http.post(`${this.baseUrl}/auth/login`,user)
  }
  getUserList():Observable<any>{
    return this.http.get(`${this.baseUrl}/auth/getUser`);
}
  deleteUser(id:String):Observable<any>{
     return this.http.delete(`${this.baseUrl}/auth/deleteUser/${id}`);
   }
  getUser(id:String):Observable<any>{
  return this.http.get(`${this.baseUrl}/auth/getUserById/${id}`);
}
  updateUser(id:string,user:any):Observable<any>{
return this.http.put(`${this.baseUrl}/auth/UpdateUser/${id}`,user);
}
}