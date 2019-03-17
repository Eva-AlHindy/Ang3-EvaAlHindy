/*
In LoginComponent we import authService and AdminLogin which is a model and defined an AdminLogin as a parameter which has the same typescript.
We have also two properties: name(string) and userState(string)to check if the username is saved in the local storage.
We have three methods:
1. onSubmit(): we use this method to send the information of user login(email and password) to the authService, and there we check if the user is admin or not.
2.checkUser():To check if user email is saved in local storage  by using [this.authService.checkIfLoggedIn();]
which we call it from authService.
3.logout(): A method which is used when we click log out button, and here we remove the user email from local storage
by using [this.authService.logout();] which we call it from authService.
*/

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { AdminLogin } from '../models/admin-login.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: AdminLogin = new AdminLogin('', '');
  username: string = "";
  userState: string;

  constructor(private authService: AuthService) {

  }

  ngOnInit() {
    this.checkUser();
  }

  onSubmit(): void {
    console.log(this.model);
    this.authService.login(this.model);
  }

  checkUser(): void {
    this.userState = this.authService.checkIfLoggedIn();
  }


  logout(): void {
    this.authService.logout();
    this.checkUser();
  }
}
