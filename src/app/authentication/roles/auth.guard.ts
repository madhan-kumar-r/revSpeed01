// auth.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RoleService } from './role.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private roleService: RoleService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const allowedRoles = next.data.allowedRoles as Array<string>;

    const userRole = this.roleService.getUserRole();

    if (userRole && allowedRoles.includes(userRole)) {
      return true;
    } else {
      // Redirect to login or access-denied page based on your application logic
      this.router.navigate(['/authentication/login']);
      return false;
    }
  }
}
