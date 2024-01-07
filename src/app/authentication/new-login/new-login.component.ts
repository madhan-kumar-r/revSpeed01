import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { User } from '../../model/user.interface';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../../../speedApps/src/app/authentication/authentication.service';

@Component({
  selector: 'app-new-login',
  templateUrl: './new-login.component.html',
  styleUrl: './new-login.component.css'
})
export class NewLoginComponent {
  email_pattern =
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
  password_pattern =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  showPassword: boolean = false;

  loginSubmit(formData: any) {
    console.log(formData.value);
  }
  registrationForm: FormGroup;

  constructor(private fb: FormBuilder, private studentService: AuthenticationService, private router: Router) {
    this.registrationForm = this.fb.group({
      email: [null, Validators.required],
      password: [null, Validators.required],
      role: [null, Validators.required]
    });
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      const formData: User = this.registrationForm.value;
      console.log(formData);
      this.studentService.registerStudent(formData).subscribe(
        (response) => {
          console.log('Registration successful:', response);
          // You can handle success actions here
          this.router.navigateByUrl('/authentication/profile');
        },
        (error) => {
          console.error('Error during registration:', error);
          // You can handle error actions here
        }
      );
    }
  }

}
