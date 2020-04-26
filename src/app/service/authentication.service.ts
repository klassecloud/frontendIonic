import { Injectable } from '@angular/core';
import { environment} from '../../environments/environment';
import {User} from '../model/user';
import {map} from 'rxjs/operators';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue() {
    return this.currentUserSubject.value;
  }


  login(username: string, password: string) {

    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Basic ' + btoa(username + ':' + password)
      })
    };
    return this.http.get<any>(`${environment.apiUrl}/login`, httpOptions)
          .pipe(map(user => {
            localStorage.setItem('currentUser', JSON.stringify(user));
            this.currentUserSubject.next(user);
            return user;
          }));
  }
  register(username: string, password: string, nickname: string) {
    return this.http.post<any>(`${environment.apiUrl}/user`, {userName: username, nickName: nickname, password: password}).pipe();
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
