import {Routes, RouterModule} from '@angular/router';

import {LoginComponent} from './pages/main-panel/login/login.component';
import {HomeComponent} from "./pages/main-panel/home/home.component";
import {AuthGuard} from "./guards/auth.guard";
import {ExamListComponent} from "./pages/student-panel/exam-list/exam-list.component";
import {ExamTestComponent} from "./pages/student-panel/exam-test/exam-test.component";
import {ExamOverviewComponent} from "./pages/profesor-panel/exam-overview/exam-overview.component";
import {StudentGuard} from "./guards/student.guard";
import {ProfesorGuard} from "./guards/profesor.guard";
import {CompletedExamListComponent} from "./pages/profesor-panel/completed-exam-list/completed-exam-list.component";

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'exams', component: ExamListComponent, canActivate: [AuthGuard]},
  {path: 'exams/:id', component: ExamTestComponent, canActivate: [AuthGuard]},
  {path: 'overview', component: CompletedExamListComponent, canActivate: [AuthGuard]},
  {path: 'overview/:id', component: ExamOverviewComponent, canActivate: [AuthGuard]},
  {path: '**', redirectTo: ''}
];

export const routing = RouterModule.forRoot(appRoutes);
