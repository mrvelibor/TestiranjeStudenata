import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {StudentService} from "../../../services/student.service";
import {AlertService} from "../../../services/alert.service";
import {Subscription} from "rxjs";
import {User} from "../../../models/user";
import {AuthenticationService} from "../../../services/authentication.service";
import {StudentExam} from "../../../models/student-exam";
import {Exam} from "../../../models/exam";

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
  exam: Exam;
  studentExam: StudentExam;
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
    this.loadExamDetails();
  }

  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
    this.userSubscription.unsubscribe();
  }

  loadExamDetails() {
    this.loading = true;
    this.alertService.clearMessage();
    this.studentService.getExam(this.examId)
      .subscribe(
        data => {
          this.exam = data;
          this.loading = false;
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });
  }

  startExam() {
    this.loading = true;
    this.alertService.clearMessage();
    this.studentService.startExam(this.currentUser, this.examId)
      .subscribe(
        data => {
          this.prepareAnswers(data);
          this.studentExam = data;
          console.log(data);
          this.loading = false;
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });
  }

  prepareAnswers(exam: StudentExam) {
    let answers = {};
    exam.questions.forEach(examQuestion => {
      let question = examQuestion.question;
      let answer = {
        "question": question
      };
      switch(question.questionType) {
        case 'multiple':
          answer['multipleChoiceAnswerMap'] = {};
      };
      answers[examQuestion.studentExamQuestionId] = answer;
    });
    this.answers = answers;
  }

  finishExam() {
    this.loading = true;
    this.alertService.clearMessage();
    let answers = this.processAnswers();
    console.log(answers);
    this.studentService.finishExam(this.studentExam, answers)
      .subscribe(
        data => {
          console.log(data);
          this.router.navigate(['exams/completed', this.studentExam.studentExamId]);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });
  }

  processAnswers() {
    let answers = [];
    Object.keys(this.answers).forEach(key => {
      let answer = this.answers[key];
      switch(answer.question.questionType) {
        case 'truefalse':
          if(answer.answerStatement == null) {
            // TODO: Display confirmation
          }
          break;
        case 'numerical':
          if(answer.answerValue == null) {
            // TODO: Display confirmation
          }
          else {
            answer.answerValue = +answer.answerValue;
          }
          break;
        case 'single':
          if(answer.singleChoiceAnswerId == null) {
            // TODO: Display confirmation
          }
          break;
        case 'multiple':
          answer.multipleChoiceAnswerIds = Object.keys(answer['multipleChoiceAnswerMap']).filter(mc => answer['multipleChoiceAnswerMap'][mc]);
          break;
      }
      answers.push(answer);
    });
    return answers;
  }

}
