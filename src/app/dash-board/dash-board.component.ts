
/* DashBoardComponent consist of two components : EditUsersComponent and UserListComponent.
The class has three proparites:
1.userList(array) to save the names of users which we want to add them throgha
a method (addUserName()),or we want to display them in UserListComponent.
2.userName(string): It is a value which we sent from edituser component to dashboard component.
3.userStat(string):To check if the username is saved in the local storage.
And has also three methods:
getUser(),addUser() and removeUserName().
*/

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})

export class DashBoardComponent implements OnInit {

  userList: string[];
  userName: string;
  userState: string;

  /*  We inject authService with constructor in dashboard componenet to check if the username is saved in local storage.
  And  inject also userService to make a connection with  serve and get users data.*/
  constructor(private authService: AuthService, private userService: UsersService) {
    this.userState = this.authService.checkIfLoggedIn();
  }

  ngOnInit() {
    this.getUser();
  }
  // A method which we used to get the users data from(https://jsonplaceholder.typicode.com/users) and save them in userList.
  getUser() {
    this.userService.getUsers()
      .subscribe(
        (response) => {
          const userArry = [];
          for (let i = 0; i < response.length; i++) {
            userArry.push({ name: response[i].name, id: response[i].id });
          }
          this.userList = userArry;
          return this.userList;
        },
        (error) => console.log('error', error),
        () => console.log('completed')
      );
  }

  //a method which it used to addUserName and this value in userList array by using push method
  addUserName(event: string): void {
    this.userName = event;
    this.userList.push(this.userName);

  }
  //a method which we used to removeUserName from userList array by using pop method
  removeUserName(_event: any): void {
    this.userList.pop();
  }

}
