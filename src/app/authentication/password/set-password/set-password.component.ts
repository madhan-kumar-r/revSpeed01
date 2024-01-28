// set-password.component.ts

import { RegisterService } from '../../register/register.service';
import { Component, Input } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-set-password',
  templateUrl: './set-password.component.html',
  styleUrls: ['./set-password.component.css']
})
export class SetPasswordComponent {
  title = 'sign-up-form';
  emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
  integreRegex = /^\d+$/
  signUpForm: any;
  showConfirmPassword: boolean = false;
  showPassword: boolean = false;

  constructor(private _fb: FormBuilder, private studentService: RegisterService, private router: Router) {
    this.signUpForm = _fb.group({
      email: ['', [Validators.required, Validators.pattern(this.emailRegex)]],
      newPassword: ['', [Validators.required, Validators.minLength(8)]],
      confirmationPassword: ['', [Validators.required, Validators.minLength(8)]],
    },
    {
      validators: this.passwordMatch('newPassword', 'confirmationPassword')
    });
  }

  passwordMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName],
        matchingControl = formGroup.controls[matchingControlName];
      if (control.value.length > 0 && matchingControl.value.length > 0) {
        if (control.value !== matchingControl.value) {
          matchingControl.setErrors({ passwordMatch: true });
        } else if (matchingControl.errors && !matchingControl.errors['passwordMatch']) {
          return;
        } else if (control.value === matchingControl.value) {
          matchingControl.setErrors(null);
        }
      }
    };
  }

  signUpClickHandler() {
    console.log(this.signUpForm.value);
    if (this.signUpForm.valid) {
      const data = this.signUpForm.value;
      console.log(data);
      this.studentService.registerSet(data).subscribe(
        (response) => {
          console.log('Registration successful:', response);
          // You can handle success actions here
        },
        (error) => {
          console.error('Error during registration:', error);
          // You can handle error actions here
        }
      );
    }
  }

  onChange(event: any) {
    if (event.checked === false) {
      this.signUpForm.get('check')?.setErrors({
        required: true
      });
    }
  }

  getControl(name: string): AbstractControl | null {
    return this.signUpForm.get(name);
  }
}
