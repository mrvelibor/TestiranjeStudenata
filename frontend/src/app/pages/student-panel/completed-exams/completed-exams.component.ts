import {Component, OnInit, OnDestroy} from '@angular/core';
import {StudentService} from "../../../services/student.service";
import {AlertService} from "../../../services/alert.service";
import {Subscription} from "rxjs";
import {User} from "../../../models/user";
import {AuthenticationService} from "../../../services/authentication.service";
import {StudentExam} from "../../../models/student-exam";

@Component({
  selector: 'app-completed-exams',
  templateUrl: 'completed-exams.component.html',
  styleUrls: ['completed-exams.component.scss']
})

export class CompletedExamsComponent implements OnInit, OnDestroy {

  currentUser: User;
  subscription: Subscription;

  studentExams: StudentExam[];

  loading: boolean;

  constructor(private authService: AuthenticationService,
              private studentService: StudentService,
              private alertService: AlertService) {
  }

  ngOnInit() {
    this.subscription = this.authService.user$.subscribe(
      user => {
        this.currentUser = user;
      }
    );
    this.loadExams();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  loadExams() {
    this.loading = true;
    this.alertService.clearMessage();
    this.studentService.getCompletedExams()
      .subscribe(
        data => {
          console.log(data);
          this.studentExams = data;
          this.loading = false;
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });
  }

}
