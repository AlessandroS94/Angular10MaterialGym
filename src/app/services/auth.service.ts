import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { User } from '../models/user';
import { Response } from '../models/response';
import { CONSTANST } from '../utils/constanst';

@Injectable()
export class AuthService {
  public loggedIn = new BehaviorSubject<boolean>(this.hasToken());

    // tslint:disable-next-line:typedef
  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  constructor(
    public http: HttpClient
  ) { }

  headers = new HttpHeaders({
    'x-access-token': localStorage.getItem('token')
  });

  login(user: User): Observable<Response> {
    return this.http.post<Response>(
      CONSTANST.routes.authorization.login, {
      username: user.user_name,
      password: user.password
    });
  }


  registration(user: User): Observable<Response> {
    return this.http.post<Response>(
        CONSTANST.routes.authorization.registration, {
          username: user.user_name,
          password: user.password,
          email: user.email,
          nome: user.nome,
          cognome: user.cognome,
          dataNascita: user.dataNascita
        });
  }

  hasToken(): boolean {
    return !!localStorage.getItem('token');
  }

}
