import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { RoleService } from '../roles/role.service';
import { User } from '../../model/user.interface';
import { Router } from '@angular/router';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-new-login',
  templateUrl: './new-login.component.html',
  styleUrls: ['./new-login.component.css']
})
export class NewLoginComponent {
  email_pattern =
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
  password_pattern =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  showPassword: boolean = false;
  constructor(
    private loginService: LoginService, 
    private router: Router,
    private roleService: RoleService,
    
  ) {}
  goToRegister(): void {
    // Navigate to the registration page
    this.router.navigate(['/authentication/register']);
  }
  loginSubmit(formData: any) {
    console.log(formData.value);
    const userRole = 'USER';

    // Extracting email and password from the form data
    const { email, password } = formData.value;

    // Creating an object with email, password, and role
    const userData = { email, password };

    // Logging the combined object
    console.log(userData);
    this.loginService.registerStudent(userData).subscribe(
      (response) => {
        console.log('Authentication successful:', response);
        const userRole = response.role;

        // Set the user's role in the RoleService
        this.roleService.setUserRole(userRole);

        // Redirect based on the user's role
        if (userRole === 'USER') {
          this.router.navigate(['/user/dashboard']);
        } else if (userRole === 'ADMIN') {
          this.router.navigate(['/admin/dashboard']);
        }

      },
      (error) => {
        console.error('Authentication failed:', error);
        // Handle error, e.g., show an error message to the user
      }
    );
  }

  
}