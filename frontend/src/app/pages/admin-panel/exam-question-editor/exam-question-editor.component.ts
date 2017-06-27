import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {AlertService} from "../../../services/alert.service";
import {Course} from "../../../models/course";
import {AdminService} from "../../../services/admin.service";
import {MdSidenav} from "@angular/material"
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {User} from "../../../models/user";
import {MdDataTableComponent} from "ng2-md-datatable";
import {Exam} from "../../../models/exam";
import {Question} from "../../../models/question";
import {SingleChoiceAnswer} from "../../../models/single-choice-answer";
import {MultipleChoiceAnswer} from "../../../models/multiple-choice-answer";

@Component({
  selector: 'app-exam-question-editor',
  templateUrl: 'exam-question-editor.component.html',
  styleUrls: ['exam-question-editor.component.scss']
})

export class ExamQuestionEditorComponent implements OnInit, AfterViewInit {

  routeSubscription: Subscription;

  @ViewChild(MdSidenav)
  sidenav: MdSidenav;

  examId: number;
  exam: Exam;

  question: Question;

  loading: boolean;

  constructor(private route: ActivatedRoute,
              private adminService: AdminService,
              private alertService: AlertService) {
    this.exam = new Exam();
    this.exam.course = new Course();
    this.resetQuestion();
  }

  ngOnInit() {
    this.routeSubscription = this.route.params.subscribe(params => {
      this.examId = +params['id'];
    });
    this.loadExam();
  }

  ngAfterViewInit() {
    this.sidenav.open();
  }

  loadExam() {
    this.loading = true;
    this.alertService.clearMessage();
    this.adminService.getExam(this.examId)
      .subscribe(
        data => {
          console.log(data);
          this.exam = data;
          this.loading = false;
        },
        error => {
          console.log(error);
          this.alertService.error(error);
          this.loading = false;
        });
  }

  addQuestion() {
    this.loading = true;
    this.alertService.clearMessage();
    this.adminService.createQuestion(this.question, this.exam)
      .subscribe(
        data => {
          console.log(data);
          this.resetQuestion();
          this.alertService.success('Pitanje dodato!');
          this.loading = false;
        },
        error => {
          console.log(error);
          this.alertService.error(error);
          this.loading = false;
        });
  }

  resetQuestion() {
    let question: Question = new Question();
    question.singleChoiceAnswers = [new SingleChoiceAnswer(), new SingleChoiceAnswer(), new SingleChoiceAnswer()];
    question.multipleChoiceAnswers = [new MultipleChoiceAnswer(), new MultipleChoiceAnswer(), new MultipleChoiceAnswer()];
    this.question = question;
  }

  addSingleChoiceAnswer() {
    this.question.singleChoiceAnswers.push(new SingleChoiceAnswer());
  }

  deleteSingleChoiceAnswer(answer: SingleChoiceAnswer) {
    let index = this.question.singleChoiceAnswers.indexOf(answer);
    if(index >= 0) {
      this.question.singleChoiceAnswers.splice(index, 1);
    }
    if(this.question.singleChoiceCorrectAnswer == answer) {
      this.question.singleChoiceCorrectAnswer = null;
    }
  }

  addMultipleChoiceAnswer() {
    this.question.multipleChoiceAnswers.push(new MultipleChoiceAnswer());
  }

  deleteMultipleChoiceAnswer(answer: MultipleChoiceAnswer) {
    let index = this.question.multipleChoiceAnswers.indexOf(answer);
    if(index >= 0) {
      this.question.multipleChoiceAnswers.splice(index, 1);
    }
  }

}
