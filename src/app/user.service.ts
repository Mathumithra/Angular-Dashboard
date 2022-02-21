import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginData, TokenData, UserData } from './module';

@Injectable({
  providedIn: 'root',
})
export class UserService {
 
  constructor(private http: HttpClient) {}

  createUser(userData: UserData): Observable<UserData> {
    return this.http.post<UserData>(
      'https://620f9959ec8b2ee28345f7c0.mockapi.io/form',
      userData
    );
  }

  userData(): Observable<Array<UserData>> {
    return this.http.get<Array<UserData>>(
      'https://620f9959ec8b2ee28345f7c0.mockapi.io/form',
      {
        headers: new HttpHeaders({
          Authorization: localStorage.getItem('app_token') || '',
        }),
      }
    );
  }

  userById(id: String): Observable<UserData> {
    return this.http.get<UserData>(
      `https://620f9959ec8b2ee28345f7c0.mockapi.io/form/${id}`
    );
  }

  updateUserById(id: String, userData: UserData): Observable<UserData> {
    return this.http.put<UserData>(
      `https://620f9959ec8b2ee28345f7c0.mockapi.io/form/${id}`,
      userData
    );
  }

  deleteUserById(id: String): Observable<UserData> {
    return this.http.delete<UserData>(
      `https://620f9959ec8b2ee28345f7c0.mockapi.io/form/${id}`
    );
  }
   login(data: LoginData): Observable<TokenData> {
    return this.http.post<TokenData>('http://localhost:9000/login', data);
  }  
}
