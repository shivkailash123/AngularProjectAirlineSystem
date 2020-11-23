import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FacebookLoginProvider, SocialAuthService, GoogleLoginProvider } from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';
import { HttpApiService } from 'src/app/core/services/http-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: SocialUser;
  loggedIn: boolean;
  flag = false;
  socailusers = new SocialUser();
  errorMessages: string;
  errorEnabled = false;
  successMessage: string;
  successEnabled = false;

  // tslint:disable-next-line: max-line-length
  constructor( private formBuilder: FormBuilder, private authService: SocialAuthService, private router: Router, private service: HttpApiService) { }
  adminForm = this.formBuilder.group({
    uname: [null, Validators.required],
    password: [null, Validators.required]
  });
  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then( (success) => {
      this.socailusers = success;
      console.log(this.socailusers);
      this.service.setLogInstatus();
      this.service.setUser(this.socailusers);
      localStorage.setItem('logedIn' , JSON.stringify(true));
      localStorage.setItem('user' , JSON.stringify(this.socailusers));
      this.router.navigate(['/flights']);
      this.successEnabled = true;
      this.successMessage = 'successFully loggedIn';
    }).catch(
      (err) => {
      this.errorEnabled = true;
      this.errorMessages = err;
    });
    this.loggedIn = true;
    localStorage.setItem('loggedin', 'true');
  }

  public signOut(): void {
    this.authService.signOut();
    localStorage.setItem('loggedin', 'false');
    this.loggedIn = false;
  }
  ngOnInit(): void {
    this.authService.authState.subscribe((user: SocialUser) => {
      this.user = user;
      console.log(user);
      this.flag = (user != null);
      this.loggedIn = (user != null);
      console.log(this.user);
    });
    console.log(this.user);
    }

    // submit(user: string, password: string): void {
    //   if (user === 'admin' && password === 'admin') {
    //     localStorage.setItem('adminlogin', 'true');
    //     this.router.navigate(['/admin']);
    //   }
    // }

    onFormSubmit(): void {
      if (this.adminForm.get('uname').value === 'admin' && this.adminForm.get('password').value === 'admin') {
        localStorage.setItem('adminlogin', 'true');
        this.router.navigate(['/admin']);
      }
    }
}
