import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { WorldComponent } from './world/world.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ListUsersComponent } from './list-users/list-users.component';

import { HttpClientModule } from '@angular/common/http';
import { ListCommentsComponent } from './list-comments/list-comments.component';
import { EditUserComponent } from './edit-user/edit-user.component';

import { FormsModule } from '@angular/forms';
import { SearchUserComponent } from './search-user/search-user.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    WorldComponent,
    WelcomeComponent,
    ListUsersComponent,
    ListCommentsComponent,
    EditUserComponent,
    SearchUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
