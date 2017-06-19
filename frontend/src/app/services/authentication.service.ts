import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map'
import {PhpService} from "./php.service";
import {BehaviorSubject} from "rxjs";
import {User} from "../models/user";

@Injectable()
export class AuthenticationService extends PhpService {

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
    user.token = userData.token;

    localStorage.setItem('user', JSON.stringify(user));
    this._userSource.next(user.user);
    return user;
  }

  login(username, password) {
    let params = new User();
    params.username = username;
    params.password = password;
    let body = JSON.stringify(params);
    console.log(body);

    let options = PhpService.createOptions();
    return this.http.post(
      `${PhpService._host}/auth`,
      body,
      options
    ).map((res: Response) => {
      return this.handleResponse(res);
    });
  }

  logout() {
    localStorage.removeItem('user');
    this._userSource.next(null);
  }
}
