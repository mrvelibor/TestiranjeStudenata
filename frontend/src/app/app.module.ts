import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule}    from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';
import {AppComponent}  from './app.component';
import {routing}        from './app.routing';

import {AlertComponent} from './directives/alert.component';
import {AuthGuard} from './guards/auth.guard';
import {AlertService} from './services/alert.service';
import {LoginComponent} from './pages/main-panel/login/login.component';
import {HomeComponent} from "./pages/main-panel/home/home.component";
import {AuthenticationService} from "./services/authentication.service";
import {RestService} from "./services/rest.service";
import {NospaceValidator} from "./directives/nospace.validator";
import {UserTypePipe} from "./directives/user_type.pipe";
import {OverlayService} from "./services/overlay.service";
import {OverlayComponent} from "./directives/overlay.component";
import {AdminGuard} from "./guards/admin.guard";
import {ProfesorGuard} from "./guards/profesor.guard";
import {StudentGuard} from "./guards/student.guard";
import {StudentService} from "./services/student.service";
import {AvailableExamsComponent} from "./pages/student-panel/available-exams/available-exams.component";
import {ExamTestComponent} from "./pages/student-panel/exam-test/exam-test.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {
  MdButtonModule, MdCheckboxModule, MdInputModule, MdRadioModule, MdProgressBarModule, MdProgressSpinnerModule,
  MdIconModule, MdSidenavModule, MdSelectModule, MaterialModule
} from "@angular/material";
import { MdDataTableModule } from 'ng2-md-datatable';
import {ExamOverviewComponent} from "./pages/profesor-panel/exam-overview/exam-overview.component";
import {CompletedExamsComponent} from "./pages/student-panel/completed-exams/completed-exams.component";
import {AdminService} from "./services/admin.service";
import {CourseEditorComponent} from "./pages/admin-panel/course-editor/course-editor.component";
import 'hammerjs';
import {UserEditorComponent} from "./pages/admin-panel/user-editor/user-editor.component";
import {ExamEditorComponent} from "./pages/admin-panel/exam-editor/exam-editor.component";
import {CourseUsersListComponent} from "./pages/admin-panel/course-users-list/course-users-list.component";
import {StudentExamsComponent} from "./pages/profesor-panel/student-exams/student-exams.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    routing,
    BrowserAnimationsModule,
    MaterialModule,
    MdButtonModule,
    MdRadioModule,
    MdCheckboxModule,
    MdInputModule,
    MdProgressSpinnerModule,
    MdProgressBarModule,
    MdDataTableModule,
    MdIconModule,
    MdSidenavModule,
    MdSelectModule
  ],
  declarations: [
    AppComponent,
    AlertComponent,
    OverlayComponent,
    HomeComponent,
    LoginComponent,
    AvailableExamsComponent,
    CompletedExamsComponent,
    ExamTestComponent,
    ExamOverviewComponent,
    StudentExamsComponent,
    UserEditorComponent,
    CourseEditorComponent,
    CourseUsersListComponent,
    ExamEditorComponent,
    NospaceValidator,
    UserTypePipe
  ],
  providers: [
    AuthGuard,
    AdminGuard,
    ProfesorGuard,
    StudentGuard,
    AlertService,
    OverlayService,
    RestService,
    AuthenticationService,
    StudentService,
    AdminService
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
