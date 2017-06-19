import {Component, OnInit, OnDestroy} from '@angular/core';
import {StudentService} from "../../../services/student.service";
import {AlertService} from "../../../services/alert.service";
import {Subscription} from "rxjs";
import {User} from "../../../models/user";
import {AuthenticationService} from "../../../services/authentication.service";

@Component({
  selector: 'app-exam-list',
  templateUrl: 'exam-list.component.html',
  styleUrls: ['exam-list.component.scss']
})

export class ExamListComponent implements OnInit, OnDestroy {

  currentUser: User;
  subscription: Subscription;

  exams: any[] = [];
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
    this.studentService.getExams()
      .subscribe(
        data => {
          console.log(data);
          this.exams = data;
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });
  }

}
