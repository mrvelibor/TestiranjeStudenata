import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map'
import {RestService} from "./rest.service";
import {Course} from "../models/course";
import {Exam} from "../models/exam";
import {User} from "../models/user";

@Injectable()
export class AdminService extends RestService {

  constructor(http: Http) {
    super(http);
  }

  getCourses() {
    let options = RestService.createOptions();
    return this.http.get(
      `${RestService._host}/courses`,
      options
    ).map(res => res.json());
  }

  getCourse(courseId: number) {
    let options = RestService.createOptions();
    return this.http.get(
      `${RestService._host}/courses/${courseId}`,
      options
    ).map(res => res.json());
  }

  createCourse(course: Course) {
    let body = JSON.stringify(course);
    console.log(body);

    let options = RestService.createOptions();
    return this.http.post(
      `${RestService._host}/create`,
      //`${RestService._host}/courses`,
      body,
      options
    ).map(res => res.json());
  }

  updateCourse(course: Course, selectedUsers: User[]) {
    let body = JSON.stringify(selectedUsers);
    console.log(body);

    let options = RestService.createOptions();
    return this.http.post(
      `${RestService._host}/create`,
      //`${RestService._host}/courses/${course.courseId}/users`,
      body,
      options
    ).map(res => res.json());
  }

  deleteCourse(course: Course) {
    let options = RestService.createOptions();
    return this.http.delete(
      `${RestService._host}/delete`,
      //`${RestService._host}/courses/${course.courseId}`,
      options
    ).map(res => res.json());
  }

  getExams() {
    let options = RestService.createOptions();
    return this.http.get(
      `${RestService._host}/exams`,
      options
    ).map(res => res.json());
  }

  createExam(exam: Exam) {
    let body = JSON.stringify(exam);
    console.log(body);

    let options = RestService.createOptions();
    return this.http.post(
      `${RestService._host}/create`,
      //`${RestService._host}/exams`,
      body,
      options
    ).map(res => res.json());
  }

  deleteExam(exam: Exam) {
    let options = RestService.createOptions();
    return this.http.delete(
      `${RestService._host}/delete`,
      //`${RestService._host}/exams/${exam.examId}`,
      options
    ).map(res => res.json());
  }

  getUsers() {
    let options = RestService.createOptions();
    return this.http.get(
      `${RestService._host}/users`,
      options
    ).map(res => res.json());
  }

  createUser(user: User) {
    let body = JSON.stringify(user);
    console.log(body);

    let options = RestService.createOptions();
    return this.http.post(
      `${RestService._host}/create`,
      //`${RestService._host}/users`,
      body,
      options
    ).map(res => res.json());
  }

  deleteUser(user: User) {
    let options = RestService.createOptions();
    return this.http.delete(
      `${RestService._host}/delete`,
      //`${RestService._host}/users/${user.userId}`,
      options
    ).map(res => res.json());
  }

  getRoles() {
    let options = RestService.createOptions();
    return this.http.get(
      `${RestService._host}/roles`,
      options
    ).map(res => res.json());
  }

}
