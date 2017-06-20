import {Component, OnInit} from '@angular/core';
import {StudentService} from "../../../services/student.service";
import {AlertService} from "../../../services/alert.service";
import {AuthenticationService} from "../../../services/authentication.service";

@Component({
  selector: 'app-completed-exam-list',
  templateUrl: 'completed-exam-list.component.html',
  styleUrls: ['completed-exam-list.component.scss']
})

export class CompletedExamListComponent implements OnInit {

  exams: any[] = [];
  loading: boolean;

  constructor(private authService: AuthenticationService,
              private studentService: StudentService,
              private alertService: AlertService) {
  }

  ngOnInit() {
    this.loadExams();
  }

  loadExams() {
    /*this.loading = true;
    this.alertService.clearMessage();
    this.studentService.getStudentExams()
      .subscribe(
        data => {
          console.log(data);
          this.exams = data;
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });*/
  }

}
