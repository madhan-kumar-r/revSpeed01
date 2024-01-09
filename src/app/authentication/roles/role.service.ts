import { Injectable } from '@angular/core';
import { NewLoginComponent } from '../new-login/new-login.component';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RoleService {

  private userRoleSubject = new BehaviorSubject<string>(''); // Initial role is an empty string
  userRole$ = this.userRoleSubject.asObservable();
  
  setUserRole(role: string) {
    const validRoles = ['ADMIN', 'USER'];
    if (validRoles.includes(role)) {
      this.userRoleSubject.next(role);
    } else {
      // Handle invalid roles, perhaps log an error or take appropriate action
      console.error('Invalid role:', role);
    }
  }
  getUserRole(): string {
    return this.userRoleSubject.value;
  }
}
