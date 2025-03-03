import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',

    })
  };

  public doLogin(user: User): Observable<User> {
    console.log("service calling");
    return this.http.post<User>(`${environment.API_URL}/login`, user);
  }

  public doRegistration(user: User): Observable<string> {
    return this.http.post<string>(`${environment.API_URL}/register`, user, { responseType: 'text' as 'json' });

  }
  public doUpdate(user: User): Observable<string> {
    return this.http.put<string>(`${environment.API_URL}/updateUser`, user, { responseType: 'text' as 'json' });

  }
  public doDeleteUser(userId: number): Observable<string> {
    return this.http.delete<string>(`${environment.API_URL}/deleteUser/${userId}`, { responseType: 'text' as 'json' });

  }
  public doUpdateUser(userId: number): Observable<User> {
    return this.http.get<User>(`${environment.API_URL}/getUser/${userId}`);

  }
  public doUpdateEmp(user: User): Observable<string> {
    return this.http.put<string>(`${environment.API_URL}/updateEmp`, user, { responseType: 'text' as 'json' });
  }
  public getEmployees(): Observable<User[]> {
    return this.http.get<User[]>(`${environment.API_URL}/users`);
  }

  public doAssign(emp:User):Observable<string> {
    return this.http.post<string>(`${environment.API_URL}/assignMng`,emp,{ responseType: 'text' as 'json' });
  }
}

