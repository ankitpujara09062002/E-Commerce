import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // Get loggedInUser data from localStorage
    let loggedInUserData = JSON.parse(localStorage.getItem('loggedInUser') as any);
    // Role Base Auth Guard
    let role: any = route?.data['role']
    if (role.includes(loggedInUserData?.role)) {
      return true;
    } else {
      this.router.navigate(['404'])
      return false;
    }
  }

}
