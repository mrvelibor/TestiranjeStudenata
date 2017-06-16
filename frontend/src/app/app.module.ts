import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule}    from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';
import {AppComponent}  from './app.component';
import {routing}        from './app.routing';

import {AlertComponent} from './directives/alert.component';
import {AuthGuard} from './guards/auth.guard';
import {AlertService} from './services/alert.service';
import {LoginComponent} from './pages/login/login.component';
import {HomeComponent} from "./pages/home/home.component";
import {AuthenticationService} from "./services/authentication.service";
import {PhpService} from "./services/php.service";
import {NospaceValidator} from "./directives/nospace.validator";
import {UserTypePipe} from "./directives/user_type.pipe";
import {OverlayService} from "./services/overlay.service";
import {OverlayComponent} from "./directives/overlay.component";
import {AnnouncementsComponent} from "./pages/announcements/announcements.component";
import {AdminGuard} from "./guards/admin.guard";
import {ProfesorGuard} from "./guards/profesor.guard";
import {StudentGuard} from "./guards/student.guard";
import {StudentService} from "./services/student.service";
import {ExamSelectorComponent} from "./pages/studentpanel/examselector/examselector.component";
import {ExamTestComponent} from "./pages/studentpanel/examtest/examtest.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MdButtonModule, MdCheckboxModule, MdInputModule, MdRadioModule} from "@angular/material";
import {ExamOverviewComponent} from "./pages/profesorpanel/examoverview/examoverview.component";
import {CompletedExamSelectorComponent} from "./pages/profesorpanel/completedexamselector/completedexamselector.component";

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
    AnnouncementsComponent,
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
    PhpService,
    AuthenticationService,
    StudentService
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
