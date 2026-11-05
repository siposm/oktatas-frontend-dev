import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { AuthService } from './services/auth.service';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { SkillsComponent } from './skills/skills.component';

/* !!! */
const routes: Routes = [
	{ path: "", redirectTo: 'homepage', pathMatch: "full" },
	{ path: "list", component: ListComponent },
	{ path: "home", component: HomepageComponent },
	{ path: "notfound", component: NotfoundComponent },
	{ path: "login", component: LoginComponent },
	{ path: "create", component: CreateComponent, canActivate: [AuthService] },
	{ path: "edit/:id", component: EditComponent, canActivate: [AuthService] },
	{ path: "skills", component: SkillsComponent, canActivate: [AuthService] },
	{ path: "**", redirectTo: 'notfound', pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
