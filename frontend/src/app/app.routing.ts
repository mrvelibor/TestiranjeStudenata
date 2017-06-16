import {Routes, RouterModule} from '@angular/router';

import {LoginComponent} from './pages/login/login.component';
import {HomeComponent} from "./pages/home/home.component";
import {AuthGuard} from "./guards/auth.guard";
import {AnnouncementsComponent} from "./pages/announcements/announcements.component";
import {ExamSelectorComponent} from "./pages/studentpanel/examselector/examselector.component";
import {ExamTestComponent} from "./pages/studentpanel/examtest/examtest.component";
import {ExamOverviewComponent} from "./pages/profesorpanel/examoverview/examoverview.component";
import {StudentGuard} from "./guards/student.guard";
import {ProfesorGuard} from "./guards/profesor.guard";
import {CompletedExamSelectorComponent} from "./pages/profesorpanel/completedexamselector/completedexamselector.component";

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
