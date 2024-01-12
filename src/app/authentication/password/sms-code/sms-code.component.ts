// sms-code.component.ts

import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sms-code',
  templateUrl: './sms-code.component.html',
  styleUrls: ['./sms-code.component.css']
})
export class SmsCodeComponent {

  @Input() secondFormGroup!: FormGroup; 

  constructor(private fb: FormBuilder,private router:Router) { }

  getSmsCodeErrorMessage() {
    return this.smsCode?.hasError('required') ? 'SMS Code is required' :
      this.smsCode?.hasError('minlength') ? 'SMS Code must be six digits long' :
        '';
  }

  get smsCode() { return this.secondFormGroup?.get('smsCode'); }

  back() {
    // Implement navigation logic to the previous step
  }

  next() {
    // Implement navigation logic to the next step
    this.router.navigateByUrl('/authentication/password/set-password')
  }
}
