import {Routes, RouterModule} from '@angular/router';

import {LoginComponent} from './pages/main-panel/login/login.component';
import {HomeComponent} from "./pages/main-panel/home/home.component";
import {AuthGuard} from "./guards/auth.guard";
import {AvailableExamsComponent} from "./pages/student-panel/available-exams/available-exams.component";
import {ExamTestComponent} from "./pages/student-panel/exam-test/exam-test.component";
import {ExamOverviewComponent} from "./pages/profesor-panel/exam-overview/exam-overview.component";
import {StudentGuard} from "./guards/student.guard";
import {ProfesorGuard} from "./guards/profesor.guard";
import {CompletedExamListComponent} from "./pages/profesor-panel/completed-exam-list/completed-exam-list.component";
import {CompletedExamsComponent} from "./pages/student-panel/completed-exams/completed-exams.component";
import {CourseEditorComponent} from "./pages/admin-panel/course-editor/course-editor.component";
import {AdminGuard} from "./guards/admin.guard";
import {UserEditorComponent} from "./pages/admin-panel/user-editor/user-editor.component";
import {ExamEditorComponent} from "./pages/admin-panel/exam-editor/exam-editor.component";

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'users', component: UserEditorComponent, canActivate: [AdminGuard]},
  {path: 'courses', component: CourseEditorComponent, canActivate: [AdminGuard]},
  {path: 'exams', component: ExamEditorComponent, canActivate: [AdminGuard]},
  {path: 'exams/available', component: AvailableExamsComponent, canActivate: [StudentGuard]},
  {path: 'exams/available/:id', component: ExamTestComponent, canActivate: [StudentGuard]},
  {path: 'exams/completed', component: CompletedExamsComponent, canActivate: [StudentGuard]},
  {path: 'exams/completed/:id', component: ExamOverviewComponent, canActivate: [StudentGuard]},
  {path: 'overview', component: CompletedExamListComponent, canActivate: [AuthGuard]},
  {path: '**', redirectTo: ''}
];

export const routing = RouterModule.forRoot(appRoutes);
