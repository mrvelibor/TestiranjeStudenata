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
import {ExamSelectorComponent} from "./pages/student-panel/exam-selector/examselector.component";
import {ExamTestComponent} from "./pages/student-panel/exam-test/examtest.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MdButtonModule, MdCheckboxModule, MdInputModule, MdRadioModule} from "@angular/material";
import {ExamOverviewComponent} from "./pages/profesor-panel/exam-overview/examoverview.component";
import {CompletedExamSelectorComponent} from "./pages/profesor-panel/completed-exam-selector/completedexamselector.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    routing,
    BrowserAnimationsModule,
    MdButtonModule,
    MdRadioModule,
    MdCheckboxModule,
    MdInputModule
  ],
  declarations: [
    AppComponent,
    AlertComponent,
    OverlayComponent,
    HomeComponent,
    LoginComponent,
    ExamSelectorComponent,
    ExamTestComponent,
    ExamOverviewComponent,
    CompletedExamSelectorComponent,
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
    StudentService
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
