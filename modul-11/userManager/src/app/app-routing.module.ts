import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelloComponent } from './hello/hello.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { WorldComponent } from './world/world.component';

const routes: Routes = [
  { path: 'hello', component: HelloComponent },
  { path: 'world', component: WorldComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
