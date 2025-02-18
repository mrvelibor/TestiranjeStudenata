import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {StudentService} from "../../../services/student.service";
import {AlertService} from "../../../services/alert.service";
import {Subscription} from "rxjs";
import {User} from "../../../models/user";
import {AuthenticationService} from "../../../services/authentication.service";
import {StudentExam} from "../../../models/student-exam";

@Component({
  selector: 'app-exam-overview',
  templateUrl: 'exam-overview.component.html',
  styleUrls: ['exam-overview.component.scss']
})

export class ExamOverviewComponent implements OnInit, OnDestroy {

  currentUser: User;

  userSubscription: Subscription;
  routeSubscription: Subscription;

  studentExamId: number;
  studentExam: StudentExam;

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
      this.studentExamId = +params['id'];
    });
    this.loadExam();
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
    this.routeSubscription.unsubscribe();
  }

  loadExam() {
    this.loading = true;
    this.alertService.clearMessage();
    this.studentService.getStudentExam(this.studentExamId)
      .subscribe(
        data => {
          console.log(data);
          this.prepareExam(data);
          this.studentExam = data;
          this.loading = false;
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });
  }

  prepareExam(studentExam: StudentExam) {
    studentExam.questions.forEach(question => {
      switch(question.question.questionType) {
        case 'single':
          if(question.singleChoiceAnswer) {
            question.singleChoiceAnswerId = question.singleChoiceAnswer.singleChoiceAnswerId;
          }
          if(question.question.singleChoiceCorrectAnswer) {
            question.question.singleChoiceCorrectAnswerId = question.question.singleChoiceCorrectAnswer.singleChoiceAnswerId;
          }
          break;
        case 'multiple':
          question['multipleChoiceAnswerMap'] = {};
          if(question.multipleChoiceAnswers) {
            question.multipleChoiceAnswers.forEach(answer => {
              question['multipleChoiceAnswerMap'][answer.multipleChoiceAnswerId] = true;
            });
          }
          break;
      }
    });
  }

}
