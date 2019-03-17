/*UserListComponent has a child component which is UserListComponent.
-In this component we define an input (user:string) to say to UserListComponent(child) that you will recive
a variable(userList array) from UserListComponent(pappa).
-toggle_textColor(boolean): we define this property to toggle color of the users list.
-onClick_toggle(): is a method,when we click  toggle Color button we call this function to change the value of a boolean variable from true to false
*/

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  //
  @Input() users: string[];

  //
  toggle_textColor: boolean = true;
  constructor() { }

  ngOnInit() {
  }

  onClick_toggle() {
    this.toggle_textColor = !this.toggle_textColor;
  }

}
