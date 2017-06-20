import {Component, OnInit, OnDestroy} from '@angular/core';
import {StudentService} from "../../../services/student.service";
import {AlertService} from "../../../services/alert.service";
import {Subscription} from "rxjs";
import {User} from "../../../models/user";
import {AuthenticationService} from "../../../services/authentication.service";
import {Exam} from "../../../models/exam";
import {Course} from "../../../models/course";
import {StudentExam} from "../../../models/student-exam";

@Component({
  selector: 'app-completed-exams',
  templateUrl: 'completed-exams.component.html',
  styleUrls: ['completed-exams.component.scss']
})

export class CompletedExamsComponent implements OnInit, OnDestroy {

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
    this.studentService.getCompletedExams()
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

  processExams(studentExams: StudentExam[]) {
    let courses = [];
    studentExams.forEach(studentExam => {
      let course = courses.find(c => c.courseId == studentExam.exam.course.courseId);
      if(!course) {
        course = Object.assign(studentExam.exam.course);
        course.studentExams = [];
        courses.push(course);
      }
      course.studentExams.push(studentExam);
    });
    return courses;
  }

}
