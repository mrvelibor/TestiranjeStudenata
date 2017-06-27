import {Routes, RouterModule} from '@angular/router';

import {LoginComponent} from './pages/main-panel/login/login.component';
import {HomeComponent} from "./pages/main-panel/home/home.component";
import {AvailableExamsComponent} from "./pages/student-panel/available-exams/available-exams.component";
import {ExamTestComponent} from "./pages/student-panel/exam-test/exam-test.component";
import {ExamOverviewComponent} from "./pages/profesor-panel/exam-overview/exam-overview.component";
import {StudentGuard} from "./guards/student.guard";
import {ProfesorGuard} from "./guards/profesor.guard";
import {CompletedExamsComponent} from "./pages/student-panel/completed-exams/completed-exams.component";
import {CourseEditorComponent} from "./pages/admin-panel/course-editor/course-editor.component";
import {AdminGuard} from "./guards/admin.guard";
import {UserEditorComponent} from "./pages/admin-panel/user-editor/user-editor.component";
import {ExamEditorComponent} from "./pages/admin-panel/exam-editor/exam-editor.component";
import {CourseUsersListComponent} from "./pages/admin-panel/course-users-list/course-users-list.component";
import {StudentExamsComponent} from "./pages/profesor-panel/student-exams/student-exams.component";
import {ConfirmCloseGuard} from "./guards/confirm-close.guard";
import {ExamQuestionEditorComponent} from "./pages/admin-panel/exam-question-editor/exam-question-editor.component";

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'users', component: UserEditorComponent, canActivate: [AdminGuard]},
  {path: 'courses', component: CourseEditorComponent, canActivate: [AdminGuard]},
  {path: 'courses/:id', component: CourseUsersListComponent, canActivate: [AdminGuard]},
  {path: 'exams', component: ExamEditorComponent, canActivate: [AdminGuard]},
  {path: 'exams/available', component: AvailableExamsComponent, canActivate: [StudentGuard]},
  {path: 'exams/available/:id', component: ExamTestComponent, canActivate: [StudentGuard], canDeactivate: [ConfirmCloseGuard]},
  {path: 'exams/completed', component: CompletedExamsComponent, canActivate: [StudentGuard]},
  {path: 'exams/completed/:id', component: ExamOverviewComponent, canActivate: [StudentGuard]},
  {path: 'exams/:id', component: ExamQuestionEditorComponent, canActivate: [AdminGuard]},
  {path: 'overview', component: StudentExamsComponent, canActivate: [ProfesorGuard]},
  {path: 'overview/:id', component: ExamOverviewComponent, canActivate: [ProfesorGuard]},
  {path: '**', redirectTo: ''}
];

export const routing = RouterModule.forRoot(appRoutes);
