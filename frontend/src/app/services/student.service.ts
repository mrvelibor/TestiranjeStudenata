import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map'
import {PhpService} from "./php.service";
import {BehaviorSubject} from "rxjs";
import {User} from "../models/user";
import { Observable } from "rxjs/Observable";

@Injectable()
export class StudentService extends PhpService {

  constructor(http: Http) {
    super(http);
  }

  getExams() {
    let options = PhpService.createOptions();
    return this.http.get(
      `${PhpService._host}/exams`,
      options
    ).map(res => res.json());
  }

  getStudentExams() {
    let options = PhpService.createOptions();
    return this.http.get(
      `${PhpService._host}/studentexam`,
      options
    ).map(res => res.json());
  }

  getStudentExam(studentExamId) {
    let options = PhpService.createOptions();
    return this.http.get(
      `${PhpService._host}/studentexam/${studentExamId}`,
      options
    ).map(res => res.json());
  }

  startExam(user, examId) {
    let params = {
      "user": user
    };
    let body = JSON.stringify(params);
    console.log(body);

    let options = PhpService.createOptions();
    return this.http.post(
      `${PhpService._host}/testing/${examId}/start`,
      body,
      options
    ).map(res => res.json());
  }

  finishExam(exam, answers) {
    let params = {
      "answers": answers
    };
    let body = JSON.stringify(params);
    console.log(body);

    let options = PhpService.createOptions();
    return this.http.post(
      `${PhpService._host}/testing/${exam.studentExamId}/finish`,
      body,
      options
    ).map(res => res.json());
  }

}
