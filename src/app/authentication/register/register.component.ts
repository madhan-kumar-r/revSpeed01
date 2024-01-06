import { Component } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.registerForm = this.formBuilder.group({
      std_id: ['', Validators.required],
      name: ['', Validators.required],
      age: ['', Validators.required],
      address: ['', Validators.required],
    });
  }

  onSubmit() {
   alert("hi");
  }

}
