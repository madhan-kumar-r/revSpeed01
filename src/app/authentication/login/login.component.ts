// login.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { User } from '../../model/user.interface';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  registrationForm: FormGroup;

  constructor(private fb: FormBuilder, private studentService: LoginService, private router: Router) {
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
