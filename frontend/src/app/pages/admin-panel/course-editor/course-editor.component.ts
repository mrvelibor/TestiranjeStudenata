import {Component, OnInit, ViewChild} from '@angular/core';
import {AlertService} from "../../../services/alert.service";
import {Course} from "../../../models/course";
import {AdminService} from "../../../services/admin.service";
import {MdSidenav} from "@angular/material"

@Component({
  selector: 'app-course-editor',
  templateUrl: 'course-editor.component.html',
  styleUrls: ['course-editor.component.scss']
})

export class CourseEditorComponent implements OnInit {

  @ViewChild(MdSidenav)
  sidenav: MdSidenav;

  courses: Course[] = [];

  course: Course = new Course();

  loading: boolean;
  working: boolean;

  constructor(private adminService: AdminService,
              private alertService: AlertService) {
  }

  ngOnInit() {
    this.loadCourses();
    this.sidenav.open();
  }

  loadCourses() {
    this.loading = true;
    this.alertService.clearMessage();
    this.adminService.getCourses()
      .subscribe(
        data => {
          console.log(data);
          this.courses = data;
          this.loading = false;
        },
        error => {
          console.log(error);
          this.alertService.error(error);
          this.loading = false;
        });
  }

  addCourse() {
    this.working = true;
    this.alertService.clearMessage();
    this.adminService.createCourse(this.course)
      .subscribe(
        data => {
          console.log(data);
          this.course.courseId = data.id;
          this.courses.push(this.course);
          this.course = new Course();
          this.working = false;
        },
        error => {
          console.log(error);
          this.alertService.error(error);
          this.working = false;
        });
  }

  deleteCourse(course: Course) {
    this.working = true;
    this.alertService.clearMessage();
    this.adminService.deleteCourse(course)
      .subscribe(
        data => {
          console.log(data);
          this.courses.splice(this.courses.indexOf(course));
          this.working = false;
        },
        error => {
          console.log(error);
          this.alertService.error(error);
          this.working = false;
        });
  }

}
