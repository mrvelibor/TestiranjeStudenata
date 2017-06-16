import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map'
import {PhpService} from "./php.service";
import {BehaviorSubject} from "rxjs";
import {User} from "../models/user";
import { Observable } from "rxjs/Observable";

@Injectable()
export class AuthenticationService extends PhpService {

  private _userSource;
  private _user;
  user$;

  constructor(http: Http) {
    super(http);
    let userdata = JSON.parse(localStorage.getItem('userdata'));
    let user = null;
    if(userdata) {
      user = userdata.user;
    }
    this._userSource = new BehaviorSubject<User>(user);
    this.user$ = this._userSource.asObservable();
    this.user$.subscribe(user => this._user = user);
  }

  private handleResponse(res: Response) {
    let user = res.json();
    console.log(res);
    if (!user) {
      return;
    }

    localStorage.setItem('userdata', JSON.stringify(user));
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
    localStorage.removeItem('userdata');
    this._userSource.next(null);
  }
}
