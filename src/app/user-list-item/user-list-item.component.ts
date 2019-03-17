/* UserListItemComponent is the child of UserListComponent.
This component has two input:
1. user which has a typescript of object because it will recive the information of user(id, name).
Till evry name of the user list we should make a routerLink, and throuh this routerLink we will sent the user.id.
2.textColor(boolean): we use this proerty to toggel the textColor of the username.
*/

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.css']
})
export class UserListItemComponent implements OnInit {
  //we define two input to say to UserListItemComponent(child) that you will recive  variables from UserListComponent(pappa)
  @Input() user: object;
  @Input() textColor: boolean;


  constructor() { }

  ngOnInit() {

  }


}
