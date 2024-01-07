import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { UserserviceService } from '../../user/userservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(
    private userAuthService: AuthService  ,
    private router: Router,
    public userService:UserserviceService
  ) {}

  ngOnInit(): void {}

  public isLoggedIn() {
    return this.userAuthService.isLoggedIn();
  }

  public logout() {
    this.userAuthService.clear();
    this.router.navigate(['/']);
  }

  public isAdmin() {
    return this.userAuthService.isAdmin(); // Corrected method name
  }

  public isUser(){
    return this.userAuthService.isUser();
  }

}
