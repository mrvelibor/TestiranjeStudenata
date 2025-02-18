import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map'
import {RestService} from "./rest.service";
import {BehaviorSubject} from "rxjs";
import {User} from "../models/user";

@Injectable()
export class AuthenticationService extends RestService {

  private _userSource;
  private _user;
  user$;

  constructor(http: Http) {
    super(http);
    let user = JSON.parse(localStorage.getItem('user'));
    this._userSource = new BehaviorSubject<User>(user);
    this.user$ = this._userSource.asObservable();
    this.user$.subscribe(user => this._user = user);
  }

  private handleResponse(res: Response) {
    console.log(res);
    let userData = res.json();
    if (!userData) {
      return;
    }
    let user = userData.user;
    let token = userData.token;
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('token', token);
    this._userSource.next(user);
    return user;
  }

  login(username, password) {
    let params = new User();
    params.username = username;
    params.password = password;
    let body = JSON.stringify(params);
    console.log(body);

    let options = RestService.options();
    return this.http.post(
      `${RestService._host}/login`,
      body,
      options
    ).map((res: Response) => {
      return this.handleResponse(res);
    });
  }

  logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    this._userSource.next(null);
  }
}
