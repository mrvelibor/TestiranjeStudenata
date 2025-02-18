import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map'
import {RestService} from "./rest.service";

@Injectable()
export class StudentService extends RestService {

  constructor(http: Http) {
    super(http);
  }

  getAvailableExams() {
    let options = RestService.options();
    return this.http.get(
      `${RestService._host}/student/exams/available`,
      options
    ).map(res => res.json());
  }

  getCompletedExams() {
    let options = RestService.options();
    return this.http.get(
      `${RestService._host}/student/exams/completed`,
      options
    ).map(res => res.json());
  }

  getExam(examId: number) {
    let options = RestService.options();
    return this.http.get(
      `${RestService._host}/exams/${examId}`,
      options
    ).map(res => res.json());
  }

  getStudentExam(studentExamId) {
    let options = RestService.options();
    return this.http.get(
      `${RestService._host}/student/exams/${studentExamId}`,
      options
    ).map(res => res.json());
  }

  startExam(examId) {
    let options = RestService.options();
    return this.http.post(
      `${RestService._host}/student/exams/${examId}/start`,
      null,
      options
    ).map(res => res.json());
  }

  finishExam(exam, answers) {
    let params = {
      "answers": answers
    };
    let body = JSON.stringify(params);
    console.log(body);

    let options = RestService.options();
    return this.http.post(
      `${RestService._host}/student/exams/${exam.studentExamId}/finish`,
      body,
      options
    ).map(res => res.json());
  }

}
