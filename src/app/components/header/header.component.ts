import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocialAuthService, SocialUser } from 'angularx-social-login';
import { from } from 'rxjs';
import { MaterialModule } from 'src/app/common-modules/material/material.module';
import { HttpApiService } from 'src/app/core/services/http-api.service';
import { LoginComponent } from 'src/app/features/login/components/login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private login: LoginComponent, private router: Router) { }
  logIn: boolean;
  user: SocialUser;


  signOut(): void {
    console.log('singout method');
    localStorage.setItem('logedIn', 'false');
    localStorage.setItem('loggedin', 'false');
    this.login.signOut();
    this.router.navigate(['/']);
  }
  flightList(): void {
    this.router.navigate(['/flights/']);
  }

  adminDashBoard(): void {
    this.router.navigate(['/admin/']);
  }
  adminSignOut(): void{
    localStorage.setItem('adminlogin', 'false');
    this.router.navigate(['/']);
  }


  loggedIn(): boolean {
    if (
      JSON.parse(localStorage.getItem('loggedin')) === true) {
      this.user = JSON.parse(localStorage.getItem('user'));
      return true;
    } else {
      return false;
    }
  }

  adminLoggedIn(): boolean {
    if (JSON.parse(localStorage.getItem('adminlogin')) === true) {
      return true;
    } else {
      return false;
    }
  }

  ngOnInit(): void {
    // this.logIn = this.service.loggedIn;
    // console.log(this.logIn);

  }

}
