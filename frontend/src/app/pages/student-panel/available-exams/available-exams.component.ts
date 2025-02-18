import {Component, OnInit, OnDestroy} from '@angular/core';
import {StudentService} from "../../../services/student.service";
import {AlertService} from "../../../services/alert.service";
import {Subscription} from "rxjs";
import {User} from "../../../models/user";
import {AuthenticationService} from "../../../services/authentication.service";
import {Exam} from "../../../models/exam";
import {Course} from "../../../models/course";

@Component({
  selector: 'app-available-exams',
  templateUrl: 'available-exams.component.html',
  styleUrls: ['available-exams.component.scss']
})

export class AvailableExamsComponent implements OnInit, OnDestroy {

  currentUser: User;
  subscription: Subscription;

  courses: Course[] = [];

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
    this.studentService.getAvailableExams()
      .subscribe(
        data => {
          console.log(data);
          this.courses = this.processExams(data);
          this.loading = false;
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });
  }

  processExams(exams: Exam[]) {
    let courses = [];
    exams.forEach(exam => {
      let course = courses.find(c => c.courseId == exam.course.courseId);
      if(!course) {
        course = Object.assign(exam.course);
        course.exams = [];
        courses.push(course);
      }
      course.exams.push(exam);
    });
    return courses;
  }

}
