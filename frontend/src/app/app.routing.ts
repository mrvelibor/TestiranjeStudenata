import {Routes, RouterModule} from '@angular/router';

import {LoginComponent} from './pages/main-panel/login/login.component';
import {HomeComponent} from "./pages/main-panel/home/home.component";
import {AuthGuard} from "./guards/auth.guard";
import {ExamSelectorComponent} from "./pages/student-panel/exam-selector/examselector.component";
import {ExamTestComponent} from "./pages/student-panel/exam-test/examtest.component";
import {ExamOverviewComponent} from "./pages/profesor-panel/exam-overview/examoverview.component";
import {StudentGuard} from "./guards/student.guard";
import {ProfesorGuard} from "./guards/profesor.guard";
import {CompletedExamSelectorComponent} from "./pages/profesor-panel/completed-exam-selector/completedexamselector.component";

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'exams', component: ExamSelectorComponent, canActivate: [AuthGuard]},
  {path: 'exams/:id', component: ExamTestComponent, canActivate: [AuthGuard]},
  {path: 'overview', component: CompletedExamSelectorComponent, canActivate: [AuthGuard]},
  {path: 'overview/:id', component: ExamOverviewComponent, canActivate: [AuthGuard]},
  {path: '**', redirectTo: ''}
];

export const routing = RouterModule.forRoot(appRoutes);
