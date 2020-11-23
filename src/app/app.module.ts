import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './common-modules/material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './features/login/components/login/login.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import {
  GoogleLoginProvider,
  FacebookLoginProvider,
} from 'angularx-social-login';
import { FlightListComponent } from './features/check-in/components/flight-list/flight-list.component';
import {  MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    FlexLayoutModule,
    HttpClientModule,
    SocialLoginModule,
    ReactiveFormsModule,
    MatDialogModule,
  ],
  providers: [ LoginComponent, {
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: true,
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider('736768766258-n5mcbqm8nl3f3qbbnit4h6m25ns6gvr8.apps.googleusercontent.com'),
        }

      ],
    } as SocialAuthServiceConfig,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
