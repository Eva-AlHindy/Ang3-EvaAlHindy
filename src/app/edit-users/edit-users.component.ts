/* EditUsersComponent has a proparty (name:string) we save the value  of input text in it.
and two two output (addUser,removeUser) which we want to send them to DashBoardComponent(pappa).
And two methods:
1.onClick_addUser():when we click add button we call this function
and by using {this.addUser.emit(this.name);} we sent (name) to dashboard component
2.onClick_removeUser():when we click remove button we call this function and by using { this.removeUser.emit();}
we say to dashboard component that we want to delete an element from an array*/

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.css']
})
export class EditUsersComponent implements OnInit {
  name: string = '';
  @Output() addUser = new EventEmitter<string>();
  @Output() removeUser = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onClick_addUser() {
    this.addUser.emit(this.name);
  }

  onClick_removeUser() {
    this.removeUser.emit();
  }

}
