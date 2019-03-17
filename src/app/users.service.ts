/*We import HttpClientModule into  user service, and inject the HttpClient into constructor of the class
we get the user's data from server (https://jsonplaceholder.typicode.com/users).
1. we use getUser to display the data for one user through id.
2. we use getUsers to display the data for all users.
*/
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  urls: any = {
    users: 'https://jsonplaceholder.typicode.com/users',

  }

  constructor(private http: HttpClient) { }

  public getUser(id: string): Observable<any> {
    return this.http.get(this.urls.users + "/" + id)
  }

  public getUsers(): Observable<any> {
    return this.http.get(this.urls.users)
  }
}
