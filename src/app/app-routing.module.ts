import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { LoginComponent } from './login/login.component';
import { SingleUserComponent } from './single-user/single-user.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import {
  RouteGuardService as RouteGuard
} from './route-guard.service';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    component: DashBoardComponent,
    canActivate: [RouteGuard]//We add canActivate to prevent the user to enter DashBoard if hasn't made login.
  },
  {
    path: 'singleuser/:user',//we sent a parameter(user).
    component: SingleUserComponent
  },

  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
