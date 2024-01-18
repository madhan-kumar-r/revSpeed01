import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { User } from '../../model/user.interface';  // Update the path based on your project structure
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registrationForm: FormGroup;

  constructor(private fb: FormBuilder, private studentService: AuthenticationService) {
    this.registrationForm = this.fb.group({
      std_id: [null, Validators.required],
      name: [null, Validators.required],
      age: [null, Validators.required],
      address: [null, Validators.required],
    });
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      const formData: User = this.registrationForm.value;
      this.studentService.registerStudent(formData).subscribe(
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

}
