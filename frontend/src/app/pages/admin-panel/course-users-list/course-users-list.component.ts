import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {AlertService} from "../../../services/alert.service";
import {Course} from "../../../models/course";
import {AdminService} from "../../../services/admin.service";
import {MdSidenav} from "@angular/material"
import {Subscription, Observable, Subject} from "rxjs";
import {Router, ActivatedRoute} from "@angular/router";
import {User} from "../../../models/user";
import {MdDataTableComponent, IDatatableSelectionEvent} from "ng2-md-datatable";

@Component({
  selector: 'app-course-users-list',
  templateUrl: 'course-users-list.component.html',
  styleUrls: ['course-users-list.component.scss']
})

export class CourseUsersListComponent implements OnInit, AfterViewInit {

  routeSubscription: Subscription;

  @ViewChild(MdSidenav)
  sidenav: MdSidenav;

  courseId: number;
  course: Course = new Course();
  allUsers: User[] = [];
  selectedUsers: User[];

  loading: boolean;

  constructor(private route: ActivatedRoute,
              private adminService: AdminService,
              private alertService: AlertService) {
  }

  ngOnInit() {
    this.routeSubscription = this.route.params.subscribe(params => {
      this.courseId = +params['id'];
    });
    this.loadCourse();
    this.loadUsers();
  }

  ngAfterViewInit() {
    this.sidenav.open();
  }

  loadCourse() {
    this.loading = true;
    this.alertService.clearMessage();
    this.adminService.getCourse(this.courseId)
      .subscribe(
        data => {
          console.log(data);
          let course = data.course;
          course.users = data.users;
          this.course = course;
        },
        error => {
          console.log(error);
          this.alertService.error(error);
        });
  }

  loadUsers() {
    this.loading = true;
    this.alertService.clearMessage();
    this.adminService.getUsers()
      .subscribe(
        data => {
          console.log(data);
          this.allUsers = data.filter(u => u.userRole.roleId != 1);
          this.loading = false;
        },
        error => {
          console.log(error);
          this.alertService.error(error);
          this.loading = false;
        });
  }

  updateCourse() {
    this.loading = true;
    this.alertService.clearMessage();
    this.adminService.updateCourse(this.course, this.selectedUsers)
      .subscribe(
        data => {
          console.log(data);
          this.loading = false;
        },
        error => {
          console.log(error);
          this.alertService.error(error);
          this.loading = false;
        });
  }

  onUserSelectionChanged(event) {
    this.selectedUsers = event.selectedValues;
  }

}
