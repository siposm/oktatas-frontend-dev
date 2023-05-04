import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, UntypedFormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { RegisterModel } from '../_models/registerModel';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  
  router: Router
  http: HttpClient
  email: FormControl
  snackBar: MatSnackBar
  registerModel: RegisterModel
  acceptTermsAndConditions: boolean

  constructor(http: HttpClient, snackBar: MatSnackBar, router: Router) {
    this.snackBar = snackBar
    this.http = http
    this.router = router
    this.acceptTermsAndConditions = false
    this.registerModel = new RegisterModel()
    this.email = new FormControl('', [Validators.required, Validators.email])
  }

  public getEmailErrorMessage() : string {
    if (this.email.hasError('required')) {
      return 'You must enter a value!';
    }

    return this.email.hasError('email') ? 'Not a valid email!' : '';
  }

  public sendRegisterCredentials() : void {
    this.http.put('https://practiceapi.nikprog.hu/Auth', this.registerModel)
    .subscribe(
      (success) => {
        this.snackBar
        .open('Registration was successful!', 'Close', { duration: 5000 })
        .afterDismissed()
        .subscribe(() => {
          this.router.navigate(['/login'])
        })
      },
      (error) => {
        this.snackBar.open('An error happened, please ty again.', 'Close', { duration: 5000 })
      })
  }
}