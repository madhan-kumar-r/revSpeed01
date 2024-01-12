import { CanActivateFn } from '@angular/router';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RoleService } from './role.service';
import { UrlTree } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private roleService: RoleService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    // Access allowedRoles using square brackets
    const allowedRoles = (next.data as { allowedRoles: string[] })['allowedRoles'];

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