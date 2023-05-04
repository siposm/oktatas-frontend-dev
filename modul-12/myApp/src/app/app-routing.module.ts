import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiService } from './api.service';
import { CreateSubjectComponent } from './create-subject/create-subject.component';
import { CreateTeacherComponent } from './create-teacher/create-teacher.component';
import { HomeComponent } from './home/home.component';
import { ListSubjectsComponent } from './list-subjects/list-subjects.component';
import { ListTeachersComponent } from './list-teachers/list-teachers.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';
import { UpdateSubjectComponent } from './update-subject/update-subject.component';
import { UpdateTeacherComponent } from './update-teacher/update-teacher.component';

const routes: Routes = [
  { path: 'subjects', component: ListSubjectsComponent },
  { path: 'teachers', component: ListTeachersComponent },
  { path: 'update-teacher/:id', component: UpdateTeacherComponent, canActivate: [ApiService] },
  { path: 'update-subject/:id', component: UpdateSubjectComponent, canActivate: [ApiService] },
  { path: 'create-subject', component: CreateSubjectComponent, canActivate: [ApiService] },
  { path: 'create-teacher', component: CreateTeacherComponent, canActivate: [ApiService] },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
