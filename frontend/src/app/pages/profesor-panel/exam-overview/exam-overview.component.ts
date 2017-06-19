import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {StudentService} from "../../../services/student.service";
import {AlertService} from "../../../services/alert.service";
import {Subscription} from "rxjs";
import {User} from "../../../models/user";
import {AuthenticationService} from "../../../services/authentication.service";

@Component({
  selector: 'app-exam-overview',
  templateUrl: 'exam-overview.component.html',
  styleUrls: ['exam-overview.component.scss']
})

export class ExamOverviewComponent implements OnInit, OnDestroy {

  currentUser: User;

  userSubscription: Subscription;
  routeSubscription: Subscription;

  examId: number;
  exam: any;

  loading: boolean;

  constructor(private route: ActivatedRoute,
              private authService: AuthenticationService,
              private studentService: StudentService,
              private alertService: AlertService) {
  }

  ngOnInit() {
    this.userSubscription = this.authService.user$.subscribe(
      user => {
        this.currentUser = user;
      }
    );
    this.routeSubscription = this.route.params.subscribe(params => {
      this.examId = +params['id'];
    });
    this.loadExam();
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
    this.routeSubscription.unsubscribe();
  }

  prepareExam(exam) {
    exam.studentExamQuestionList.filter(q => q.questionId.questionType == 'multiple').forEach(question => {
      question.multipleChoiceAnswers = {};
      if(question.multipleChoiceAnswerList) {
        question.multipleChoiceAnswerList.forEach(answer => {
          question.multipleChoiceAnswers[answer.multipleChoiceAnswerId] = true;
        });
      }
      console.log(question);
    });
  }

  loadExam() {
    this.loading = true;
    this.alertService.clearMessage();
    this.studentService.getStudentExam(this.examId)
      .subscribe(
        data => {
          console.log(data);
          this.prepareExam(data);
          this.exam = data;
        },
        error => {
          let data = JSON.parse('{    "examId": {        "description": "AA001 ispitivanje",        "examId": 7,        "name": "Ispit 1",        "numberOfQuestions": 5    },    "startTime": "2017-06-14T10:54:21.511+02:00",    "studentExamId": 51,    "studentExamQuestionList": [        {            "questionId": {                "correctStatement": true,                "examId": {                    "description": "AA001 ispitivanje",                    "examId": 7,                    "name": "Ispit 1",                    "numberOfQuestions": 5                },                "multipleChoiceAnswerList": [],                "questionId": 10,                "questionType": "truefalse",                "singleChoiceAnswerList": [],                "text": "Pitanje 1?"            },            "studenExamQuestionId": 52        },        {            "questionId": {                "correctValue": 10,                "examId": {                    "description": "AA001 ispitivanje",                    "examId": 7,                    "name": "Ispit 1",                    "numberOfQuestions": 5                },                "multipleChoiceAnswerList": [],                "questionId": 11,                "questionType": "numerical",                "singleChoiceAnswerList": [],                "text": "Pitanje 2?"            },            "studenExamQuestionId": 53        },        {            "questionId": {                "examId": {                    "description": "AA001 ispitivanje",                    "examId": 7,                    "name": "Ispit 1",                    "numberOfQuestions": 5                },                "multipleChoiceAnswerList": [],                "questionId": 12,                "questionType": "single",                "singleChoiceAnswerId": {                    "singleChoiceAnswerId": 15,                    "text": "Odgovor 3"                },                "singleChoiceAnswerList": [                    {                        "singleChoiceAnswerId": 13,                        "text": "Odgovor 1"                    },                    {                        "singleChoiceAnswerId": 14,                        "text": "Odgovor 2"                    },                    {                        "singleChoiceAnswerId": 15,                        "text": "Odgovor 3"                    }                ],                "text": "Pitanje 3?"            },            "studenExamQuestionId": 54        },        {            "questionId": {                "correctStatement": false,                "examId": {                    "description": "AA001 ispitivanje",                    "examId": 7,                    "name": "Ispit 1",                    "numberOfQuestions": 5                },                "multipleChoiceAnswerList": [],                "questionId": 20,                "questionType": "truefalse",                "singleChoiceAnswerList": [],                "text": "Pitanje 5?"            },            "studenExamQuestionId": 55        },        {            "questionId": {                "correctStatement": false,                "examId": {                    "description": "AA001 ispitivanje",                    "examId": 7,                    "name": "Ispit 1",                    "numberOfQuestions": 5                },                "multipleChoiceAnswerList": [],                "questionId": 21,                "questionType": "truefalse",                "singleChoiceAnswerList": [],                "text": "Pitanje 6?"            },            "studenExamQuestionId": 56        }    ],    "userId": {        "email": "student@localhost",        "fullName": "Student",        "userId": 3,        "userRoleList": [            {                "roleId": 3,                "roleName": "ROLE_STUDENT"            }        ],        "username": "student"    }}');
          this.prepareExam(data);
          this.exam = data;
          this.alertService.error(error);
          this.loading = false;
        });
  }

}
