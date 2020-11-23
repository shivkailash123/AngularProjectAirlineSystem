import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService implements CanActivate{
  constructor(public router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if (localStorage.getItem('adminlogin') === 'true') {
        return true;
      }
      else {
        alert('dont have permission to view this page');
        localStorage.setItem('adminlogin', 'false');
        this.router.navigate(['/login']);
        return false;
      }

  }
}
