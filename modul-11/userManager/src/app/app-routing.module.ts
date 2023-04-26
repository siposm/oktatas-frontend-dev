import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditUserComponent } from './edit-user/edit-user.component';
import { HelloComponent } from './hello/hello.component';
import { ListCommentsComponent } from './list-comments/list-comments.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { WorldComponent } from './world/world.component';

const routes: Routes = [
  { path: 'hello', component: HelloComponent },
  { path: 'world', component: WorldComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'users', component: ListUsersComponent },
  { path: 'comments', component: ListCommentsComponent },
  { path: 'edituser/:id', component: EditUserComponent },
  { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
