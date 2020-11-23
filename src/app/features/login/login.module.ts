import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { LoginRoutingModule } from './login-routing.module';
import { MaterialModule } from 'src/app/common-modules/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class LoginModule { }
