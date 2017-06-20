import {Component, OnInit, ViewChild} from '@angular/core';
import {AlertService} from "../../../services/alert.service";
import {AdminService} from "../../../services/admin.service";
import {MdSidenav} from "@angular/material"
import {User} from "../../../models/user";
import {UserRole} from "../../../models/user-role";

@Component({
  selector: 'app-user-editor',
  templateUrl: 'user-editor.component.html',
  styleUrls: ['user-editor.component.scss']
})

export class UserEditorComponent implements OnInit {

  @ViewChild(MdSidenav)
  sidenav: MdSidenav;

  users: User[] = [];
  roles: UserRole[] = [];

  user: User = new User();

  loading: boolean;
  working: boolean;

  constructor(private adminService: AdminService,
              private alertService: AlertService) {
  }

  ngOnInit() {
    this.loadUsers();
    this.loadRoles();
    this.sidenav.open();
  }

  loadUsers() {
    this.loading = true;
    this.alertService.clearMessage();
    this.adminService.getUsers()
      .subscribe(
        data => {
          console.log(data);
          this.users = data;
          this.loading = false;
        },
        error => {
          console.log(error);
          this.alertService.error(error);
          this.loading = false;
        });
  }

  loadRoles() {
    this.loading = true;
    this.alertService.clearMessage();
    this.adminService.getRoles()
      .subscribe(
        data => {
          console.log(data);
          this.roles = data;
          this.loading = false;
        },
        error => {
          console.log(error);
          this.alertService.error(error);
          this.loading = false;
        });
  }

  addUser() {
    this.working = true;
    this.alertService.clearMessage();
    this.adminService.createUser(this.user)
      .subscribe(
        data => {
          console.log(data);
          this.user.userId = data.id;
          this.users.push(this.user);
          this.user = new User();
          this.working = false;
        },
        error => {
          console.log(error);
          this.alertService.error(error);
          this.working = false;
        });
  }

  deleteUser(user: User) {
    this.working = true;
    this.alertService.clearMessage();
    this.adminService.deleteUser(user)
      .subscribe(
        data => {
          console.log(data);
          this.users.splice(this.users.indexOf(user));
          this.working = false;
        },
        error => {
          console.log(error);
          this.alertService.error(error);
          this.working = false;
        });
  }

}
