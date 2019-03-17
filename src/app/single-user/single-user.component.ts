/* In SingleUserComponent we import ActivatedRoute and UsersService.
We inject the router into  the constructor to sent a parameter which is (user) through the router,and we inject also
userService to sent the property (userId:string) throught the  getUserInfo() method to get the the data of the user which has
the same id.
and we called this metod by the method:ngOnInit().
*/

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css']
})
export class SingleUserComponent implements OnInit {

  user: object;
  userId: string;

  constructor(private route: ActivatedRoute, private userService: UsersService) {
    this.route.params.subscribe(params => {
      this.userId = params.user;
    })

  }

  ngOnInit() {
    this.getUserInfo();
  }

  getUserInfo() {
    this.userService.getUser(this.userId)
      .subscribe(
        (response: any) => {
          this.user = response;
        },
        (error) => console.log('error', error),
        () => console.log('completed')
      );
  }

}
