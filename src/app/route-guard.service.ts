/* Import (Router, CanActivate), and inject the router into constructor of the class.
 This class has a proparty (authorized) which has a boolean typescript and it refers if there is user in local storge or not.
 And one method (canActivate()).
This method makes a checkup if the username is saved in the local storage through (this.authService.checkIfLoggedIn())
  and we use the method boolean to change the typescript from string to boolean and save the result in  (this.authorized).
 If there is no username saved in local storage so we prevint the user to enter dashbourd and sent the user to login.
*/


import { Router, CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {
  authorized: boolean;

  constructor(private authService: AuthService, public router: Router) {
  }

  canActivate(): boolean {
    this.authorized = Boolean(this.authService.checkIfLoggedIn());
    if (!this.authorized) {
      //  alert("Please login!")
      this.router.navigate(['login']);
      return false;
    }
    return true;
    this.router.navigate(['dashboard']);
  }

}
