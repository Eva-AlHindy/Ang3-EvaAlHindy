/*In CreatNewUserComponent: we make a form with reactive form so we import
{FormBuilder, FormGroup, Validators}. And we import also:
- Router to sent the user to loginComponent if he add right informatiom.
-AuthService : We sent the form's value through createUser()method to the authService
and there we add this object to admins array.
- AdminFull: which is the model that we want our data to look.
We inject Router, AuthService and FormBuilder into constructor.
we have two properites:
1-registerForm: refer to the all inputs which find in the form.
2-isSubmitt(boolean) to refer that we recrive the iformation from the form.
and we have one method : createUser().
*/
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { AdminFull } from '../models/admin-full.model';

@Component({
  selector: 'app-creat-new-user',
  templateUrl: './creat-new-user.component.html',
  styleUrls: ['./creat-new-user.component.css']
})
export class CreatNewUserComponent implements OnInit {
  registerForm: FormGroup;
  isSubmitted = false;
  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder) {
  }
  // here we determind how validations of the input's form
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(10)]],
    });
  }
  // We add a get property to make easy to access the form controls on the HTML form
  get formControls() {
    return this.registerForm.controls;
  }
  /* if the validations is ok for all elements so sent the registerForm.value to the authService,
  sedan make arouter to loginComponent.*/
  Register() {
    this.isSubmitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    this.authService.createUser(this.registerForm.value);
    this.router.navigateByUrl('/login');
  }

}
