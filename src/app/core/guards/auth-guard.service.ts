import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { LoginComponent } from 'src/app/features/login/components/login/login.component';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(public router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if (localStorage.getItem('loggedin') === 'true') {
        return true;
      }
      else {
        alert('dont have permission to view this page');
        localStorage.setItem('loggedin', 'false');
        this.router.navigate(['/login']);
        return false;
      }

  }


}
