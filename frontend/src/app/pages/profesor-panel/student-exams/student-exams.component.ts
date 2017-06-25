import {Component, OnInit, OnDestroy, ViewChild} from '@angular/core';
import {StudentService} from "../../../services/student.service";
import {AlertService} from "../../../services/alert.service";
import {Course} from "../../../models/course";
import {StudentExam} from "../../../models/student-exam";
import {MdSidenav} from "@angular/material";
import {ProfesorService} from "../../../services/profesor.service";

@Component({
  selector: 'app-student-exams',
  templateUrl: 'student-exams.component.html',
  styleUrls: ['student-exams.component.scss']
})

export class StudentExamsComponent implements OnInit, OnDestroy {

  @ViewChild(MdSidenav)
  sidenav: MdSidenav;

  courses: Course[] = [];
  selectedCourse: Course;

  loading: boolean;

  constructor(private profesorService: ProfesorService,
              private alertService: AlertService) {
  }

  ngOnInit() {
    this.loadStudentExams();
    this.sidenav.open();
  }

  ngOnDestroy() {
  }

  loadStudentExams() {
    this.loading = true;
    this.alertService.clearMessage();
    this.profesorService.getCompletedExams()
      .subscribe(
        data => {
          console.log(data);
          this.courses = this.processStudentExams(data);
          if(this.courses.length > 0) {
            this.selectCourse(this.courses[0]);
          }
          console.log(this.courses);
          this.loading = false;
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });
  }

  processStudentExams(studentExams: StudentExam[]) {
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

  selectCourse(course: Course) {
    this.selectedCourse = course;
  }

}
