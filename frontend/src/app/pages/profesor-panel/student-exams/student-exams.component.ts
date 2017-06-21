import {Component, OnInit, OnDestroy} from '@angular/core';
import {StudentService} from "../../../services/student.service";
import {AlertService} from "../../../services/alert.service";
import {Exam} from "../../../models/exam";
import {Course} from "../../../models/course";
import {StudentExam} from "../../../models/student-exam";

@Component({
  selector: 'app-student-exams',
  templateUrl: 'student-exams.component.html',
  styleUrls: ['student-exams.component.scss']
})

export class StudentExamsComponent implements OnInit, OnDestroy {

  courses: Course[] = [];

  loading: boolean;

  constructor(private studentService: StudentService,
              private alertService: AlertService) {
  }

  ngOnInit() {
    this.loadStudentExams();
  }

  ngOnDestroy() {
  }

  loadStudentExams() {
    this.loading = true;
    this.alertService.clearMessage();
    this.studentService.getCompletedExams()
      .subscribe(
        data => {
          console.log(data);
          this.courses = this.processStudentExams(data);
          this.loading = false;
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });
  }

  processStudentExams(studentExams: StudentExam[]) {
    let exams = [];
    studentExams.forEach(studentExam => {
      let exam = exams.find(e => e.examId == studentExam.exam.examId);
      if(!exam) {
        exam = Object.assign(studentExam.exam);
        exam.studentExams = [];
        exams.push(exam);
      }
      exam.studentExams.push(studentExam);
    });
    return this.processExams(exams);
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
