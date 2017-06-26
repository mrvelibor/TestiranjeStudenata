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

  examStarted: boolean;
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
    this.studentService.startExam(this.examId)
      .subscribe(
        data => {
          console.log(data);
          this.answers = this.prepareAnswers(data);
          console.log(this.answers);
          this.studentExam = data;
          this.loading = false;
          this.examStarted = true;
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
    return answers;
  }

  finishExam() {
    this.alertService.clearMessage();
    let processedAnswers = this.processAnswers();
    console.log(processedAnswers);
    if(processedAnswers.unanswered) {
      let confirmation = confirm(`Niste odgovorili na ${processedAnswers.unanswered} pitanja. Da li sigurno želite da završite?`);
      if(!confirmation) {
        return;
      }
    }
    this.loading = true;
    this.studentService.finishExam(this.studentExam, processedAnswers.answers)
      .subscribe(
        data => {
          this.examStarted = false;
          console.log(data);
          this.router.navigate(['exams/completed', this.studentExam.studentExamId]);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });
  }

  processAnswers() {
    let unanswered = 0;
    let answers = [];
    Object.keys(this.answers).forEach(key => {
      let answer = this.answers[key];
      switch(answer.question.questionType) {
        case 'truefalse':
          if(answer.answerStatement == null) {
            ++unanswered;
          }
          break;
        case 'numerical':
          if(answer.answerValue == null) {
            ++unanswered;
          }
          else {
            answer.answerValue = +answer.answerValue;
          }
          break;
        case 'single':
          if(answer.singleChoiceAnswerId == null) {
            ++unanswered;
          }
          break;
        case 'multiple':
          answer.multipleChoiceAnswerIds = Object.keys(answer.multipleChoiceAnswerMap).filter(mc => answer.multipleChoiceAnswerMap[mc]);
          if(answer.multipleChoiceAnswerIds.length == 0) {
            ++unanswered;
          }
          break;
      }
      answers.push(answer);
    });
    return {
      'answers': answers,
      'unanswered': unanswered
    };
  }

}
