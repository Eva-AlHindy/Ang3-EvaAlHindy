import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserListItemComponent } from './user-list-item/user-list-item.component';
import { EditUsersComponent } from './edit-users/edit-users.component';
import { SingleUserComponent } from './single-user/single-user.component';
import { LoginComponent } from './login/login.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouteGuardService } from './route-guard.service';
import { AuthService } from './auth.service';
import { HttpClientModule } from '@angular/common/http';
import { CreatNewUserComponent } from './creat-new-user/creat-new-user.component';
import { ErrorMassageComponent } from './error-massage/error-massage.component';

//we import two servescie(RouteGuardService and AuthService) to make a guard and added them to providers array
@NgModule({
  declarations: [
    AppComponent,
    DashBoardComponent,
    UserListComponent,
    UserListItemComponent,
    EditUsersComponent,
    SingleUserComponent,
    LoginComponent,
    NavBarComponent,
    PageNotFoundComponent,
    CreatNewUserComponent,
    ErrorMassageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [
    AuthService,
    RouteGuardService
  ],
  bootstrap: [AppComponent],
  entryComponents: [ErrorMassageComponent]
})
export class AppModule { }
