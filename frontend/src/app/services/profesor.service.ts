import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map'
import {RestService} from "./rest.service";

@Injectable()
export class ProfesorService extends RestService {

  constructor(http: Http) {
    super(http);
  }

  getCompletedExams() {
    let options = RestService.options();
    return this.http.get(
      `${RestService._host}/profesor/exams/completed`,
      options
    ).map(res => res.json());
  }

  getStudentExam(studentExamId) {
    let options = RestService.options();
    return this.http.get(
      `${RestService._host}/profesor/exams/${studentExamId}`,
      options
    ).map(res => res.json());
  }

}
