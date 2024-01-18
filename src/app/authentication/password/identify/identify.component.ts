// identify.component.ts

import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-identify',
  templateUrl: './identify.component.html',
  styleUrls: ['./identify.component.css']
})
export class IdentifyComponent {
  @Input() firstFormGroup!: FormGroup;
  

  constructor(private fb: FormBuilder,private router: Router) { }

  getEmailErrorMessage() {
    return this.email?.hasError('required') ? 'Email is required' :
      this.email?.hasError('email') ? 'Not a valid email' :
        '';
  }

  get username() { return this.firstFormGroup?.get('username'); }
  get email() { return this.firstFormGroup?.get('email'); }

  next() {
    // Implement navigation logic to the next step
    this.router.navigateByUrl('/authentication/password/sms-code');

  }
}
