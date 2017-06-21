import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map'
import {environment} from "../../environments/environment";

@Injectable()
export class RestService {

  protected static _host: string = environment.apiUrl;

  constructor(protected http: Http) {
  }

  protected static options() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let token = localStorage.getItem('token');
    if (token) {
      headers.append('Authorization', 'Bearer ' + token);
    }
    return new RequestOptions({headers: headers, withCredentials: token != null});
  }

}
