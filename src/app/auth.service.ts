/* In auth service, we import AdminFull which is a model and defined admis(typescript is AdminFull ) which has the information
of admins:firstname,lastname, email and password.
This service has four methods:checkIfLoggedIn(),login() and logout().
These methods are using by Login component to determine if the user is admin or not,
and save user email in local storge.
and the last one is createUser() which create a new admin.
*/

import { Injectable } from '@angular/core';
import { AdminFull } from './models/admin-full.model';
import { AdminLogin } from './models/admin-login.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedUser: string;
  adminIsFind: boolean = false;// This property used to determine if the user is admin or not.

  public admins: AdminFull[] = [{
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@email.com',
    password: '1234567890'
  }, {
    firstName: 'Kylie',
    lastName: 'Johnson',
    email: 'kylie.johnson@email.com',
    password: '0987654321'
  }];

  constructor() {
  }

  // A method which make a check up if the useremail is saved in localStorage.
  checkIfLoggedIn() {
    return localStorage.getItem('user');
  }

  /*A method which first make for loop in admin object to find is the user have the same admin email and password.
if this ok so it saves the useremail in localStorage and add the vale true to the variable adminIsFind.
But if the vale of the adminIsFind is false so the user can't login and show alert 'Erorr login'*/
  public login(user: AdminLogin) {
    this.adminIsFind = false;
    for (let i = 0; i < this.admins.length; i++) {
      if (user.email == this.admins[i].email && user.password == this.admins[i].password) {
        localStorage.setItem('user', user.email);
        this.loggedUser = user.email;
        this.adminIsFind = true;
        break;
      }
      else {
        this.adminIsFind = false;
      }

    }

    if (this.adminIsFind == false) {
      alert("Error Login");
    }
  }

  //A method which deletes the useremail from the localStorage.
  public logout() {
    localStorage.clear();
    this.loggedUser = undefined;
  }
  //A method which add a new admin(typescript is object) to admins array by using push method.
  public createUser(admin: AdminFull) {
    this.admins.push(admin);
  }

}
