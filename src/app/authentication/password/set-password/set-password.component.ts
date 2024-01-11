// set-password.component.ts

import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-set-password',
  templateUrl: './set-password.component.html',
  styleUrls: ['./set-password.component.css']
})
export class SetPasswordComponent {
  @Input() thirdFormGroup!: FormGroup; 
  hide = true;

  constructor(private fb: FormBuilder,private route:Router) { }

  resetPassword() {
    // Implement password reset logic
  }

  back() {
    // Implement navigation logic to the previous step
  }

  get password() { return this.thirdFormGroup?.get('password'); }
}
