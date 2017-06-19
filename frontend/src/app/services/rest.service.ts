import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map'
import {environment} from "../../environments/environment";

@Injectable()
export class RestService {

  protected static _host: string = environment.apiUrl;

  constructor(protected http: Http) {
  }

  protected static createOptions(token = null) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    if (token) {
      headers.append('Authentication', 'Bearer ' + token);
    }
    return new RequestOptions({headers: headers, withCredentials: token != null});
  }

}
