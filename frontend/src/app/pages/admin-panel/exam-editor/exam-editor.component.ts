import {Component, OnInit, ViewChild} from '@angular/core';
import {AlertService} from "../../../services/alert.service";
import {AdminService} from "../../../services/admin.service";
import {MdSidenav} from "@angular/material"
import {Course} from "../../../models/course";
import {Exam} from "../../../models/exam";

@Component({
  selector: 'app-exam-editor',
  templateUrl: 'exam-editor.component.html',
  styleUrls: ['exam-editor.component.scss']
})

export class ExamEditorComponent implements OnInit {

  @ViewChild(MdSidenav)
  sidenav: MdSidenav;

  exams: Exam[] = [];
  courses: Course[] = [];

  exam: Exam = new Exam();

  loading: boolean;
  working: boolean;

  constructor(private adminService: AdminService,
              private alertService: AlertService) {
  }

  ngOnInit() {
    this.loadExams();
    this.loadCourses();
    this.sidenav.open();
  }

  loadExams() {
    this.loading = true;
    this.alertService.clearMessage();
    this.adminService.getExams()
      .subscribe(
        data => {
          console.log(data);
          this.exams = data;
          this.loading = false;
        },
        error => {
          console.log(error);
          this.alertService.error(error);
          this.loading = false;
        });
  }

  loadCourses() {
    this.loading = true;
    this.alertService.clearMessage();
    this.adminService.getCourses()
      .subscribe(
        data => {
          console.log(data);
          this.courses = data;
          this.loading = false;
        },
        error => {
          console.log(error);
          this.alertService.error(error);
          this.loading = false;
        });
  }

  addExam() {
    this.working = true;
    this.alertService.clearMessage();
    this.adminService.createExam(this.exam)
      .subscribe(
        data => {
          console.log(data);
          this.exam.examId = data.id;
          this.exams.push(this.exam);
          this.exam = new Exam();
          this.working = false;
        },
        error => {
          console.log(error);
          this.alertService.error(error);
          this.working = false;
        });
  }

  deleteExam(exam: Exam) {
    this.working = true;
    this.alertService.clearMessage();
    this.adminService.deleteExam(exam)
      .subscribe(
        data => {
          console.log(data);
          this.exams.splice(this.exams.indexOf(exam));
          this.working = false;
        },
        error => {
          console.log(error);
          this.alertService.error(error);
          this.working = false;
        });
  }

}
