import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {StudentService} from "../../../services/student.service";
import {AlertService} from "../../../services/alert.service";
import {Subscription} from "rxjs";
import {User} from "../../../models/user";
import {AuthenticationService} from "../../../services/authentication.service";

@Component({
  selector: 'app-exam-test',
  templateUrl: 'exam-test.component.html',
  styleUrls: ['exam-test.component.scss']
})

export class ExamTestComponent implements OnInit, OnDestroy {

  routeSubscription: Subscription;
  userSubscription: Subscription;

  currentUser: User;

  examId: number;
  exam: any;
  answers: any;

  loading: boolean;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private authService: AuthenticationService,
              private studentService: StudentService,
              private alertService: AlertService) {
  }

  ngOnInit() {
    this.routeSubscription = this.route.params.subscribe(params => {
      this.examId = +params['id'];
    });
    this.userSubscription = this.authService.user$.subscribe(
      user => {
        this.currentUser = user;
      }
    );
  }

  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
    this.userSubscription.unsubscribe();
  }

  prepareAnswers(exam) {
    let answers = {};
    exam.studentExamQuestionList.forEach(question => {
      console.log(question);
      let answer = {
        "question": question.questionId
      };
      switch(question.questionId.questionType) {
        case 'multiple':
          answer['multipleChoiceAnswers'] = {};
      };
      console.log(answer);
      answers[question.questionId.questionId] = answer;
    });
    this.answers = answers;
  }

  startExam() {
    this.loading = true;
    this.alertService.clearMessage();
    this.studentService.startExam(this.currentUser, this.examId)
      .subscribe(
        data => {
          this.prepareAnswers(data);
          this.exam = data;
        },
        error => {
          this.exam = JSON.parse('{    "examId": {        "description": "AA001 ispitivanje",        "examId": 7,        "name": "Ispit 1",        "numberOfQuestions": 5    },    "startTime": "2017-06-14T10:54:21.511+02:00",    "studentExamId": 51,    "studentExamQuestionList": [        {            "questionId": {                "correctStatement": true,                "examId": {                    "description": "AA001 ispitivanje",                    "examId": 7,                    "name": "Ispit 1",                    "numberOfQuestions": 5                },                "multipleChoiceAnswerList": [],                "questionId": 10,                "questionType": "truefalse",                "singleChoiceAnswerList": [],                "text": "Pitanje 1?"            },            "studenExamQuestionId": 52        },        {            "questionId": {                "correctValue": 10,                "examId": {                    "description": "AA001 ispitivanje",                    "examId": 7,                    "name": "Ispit 1",                    "numberOfQuestions": 5                },                "multipleChoiceAnswerList": [],                "questionId": 11,                "questionType": "numerical",                "singleChoiceAnswerList": [],                "text": "Pitanje 2?"            },            "studenExamQuestionId": 53        },        {            "questionId": {                "examId": {                    "description": "AA001 ispitivanje",                    "examId": 7,                    "name": "Ispit 1",                    "numberOfQuestions": 5                },                "multipleChoiceAnswerList": [],                "questionId": 12,                "questionType": "single",                "singleChoiceAnswerId": {                    "singleChoiceAnswerId": 15,                    "text": "Odgovor 3"                },                "singleChoiceAnswerList": [                    {                        "singleChoiceAnswerId": 13,                        "text": "Odgovor 1"                    },                    {                        "singleChoiceAnswerId": 14,                        "text": "Odgovor 2"                    },                    {                        "singleChoiceAnswerId": 15,                        "text": "Odgovor 3"                    }                ],                "text": "Pitanje 3?"            },            "studenExamQuestionId": 54        },        {            "questionId": {                "correctStatement": false,                "examId": {                    "description": "AA001 ispitivanje",                    "examId": 7,                    "name": "Ispit 1",                    "numberOfQuestions": 5                },                "multipleChoiceAnswerList": [],                "questionId": 20,                "questionType": "truefalse",                "singleChoiceAnswerList": [],                "text": "Pitanje 5?"            },            "studenExamQuestionId": 55        },        {            "questionId": {                "correctStatement": false,                "examId": {                    "description": "AA001 ispitivanje",                    "examId": 7,                    "name": "Ispit 1",                    "numberOfQuestions": 5                },                "multipleChoiceAnswerList": [],                "questionId": 21,                "questionType": "truefalse",                "singleChoiceAnswerList": [],                "text": "Pitanje 6?"            },            "studenExamQuestionId": 56        }    ],    "userId": {        "email": "student@localhost",        "fullName": "Student",        "userId": 3,        "userRoleList": [            {                "roleId": 3,                "roleName": "ROLE_STUDENT"            }        ],        "username": "student"    }}');
          this.alertService.error(error);
          this.loading = false;
        });
  }

  finishExam() {
    this.loading = true;
    this.alertService.clearMessage();

    let answers = [];
    Object.keys(this.answers).forEach(key => {
      let answer = this.answers[key];
      switch(answer.question.questionType) {
        case 'numerical':
          answer.answerValue = +answer.answerValue;
          break;
        case 'multiple':
          let answerIds = [];
          Object.keys(answer.multipleChoiceAnswers).forEach(mc => {
            if(answer.multipleChoiceAnswers[mc]) {
              answerIds.push(mc);
            }
          });
          answer['multipleChoiceAnswerIds'] = answerIds;
          break;
      }
      answers.push(answer);
    });
    console.log(this.answers);

    this.studentService.finishExam(this.exam, answers)
      .subscribe(
        data => {
          console.log(data);
          this.router.navigate(['overview', this.exam.studentExamId]);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });
  }

}
