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
import { MatDialog, MatDialogRef } from '@angular/material';
import { ErrorMassageComponent } from '../error-massage/error-massage.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: AdminLogin = new AdminLogin('', '');
  username: string = "";
  userState: string;
  errorDialogRef: MatDialogRef<ErrorMassageComponent>;
  constructor(private authService: AuthService, private dialog: MatDialog) {
  }

  ngOnInit() {
    this.checkUser();
  }

  onSubmit(): void {
    this.authService.login(this.model);
  }

  checkUser(): void {
    this.userState = this.authService.checkIfLoggedIn();
  }
  logout(): void {
    this.authService.logout();
    this.checkUser();
  }

  openErrorDialog() {
    // console.log("test");
    // alert("test");
    this.errorDialogRef = this.dialog.open(ErrorMassageComponent, {
      hasBackdrop: false
    });
  }
}
