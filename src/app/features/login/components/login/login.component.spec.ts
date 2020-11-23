import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpApiService } from 'src/app/core/services/http-api.service';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  // let component: LoginComponent;
  // let fixture: ComponentFixture<LoginComponent>;
  // let data = {
  //   uname: 'admin',
  //   password: 'admin'
  // }
  // beforeEach(waitForAsync(() => {
  //   TestBed.configureTestingModule({
  //     declarations: [ LoginComponent ],
  //     imports: [
  //       HttpClientModule,
  //       RouterTestingModule,
  //       RouterModule.forRoot([]),
  //       ReactiveFormsModule
  //      // Location,
  //     ],
  //     providers: [
  //       FormBuilder,
  //       {
  //         provide: HttpApiService,
  //       },
  //     ]
  //   })
  //   .compileComponents();
  // }));

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(LoginComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  // // it('should countain a default value for the loginform', () => {

  // //   component.adminForm = new FormGroup({
  // //      uname: new FormControl('admin'),
  // //      password: new FormControl('admin')
  // //   });
  // //   expect(component.adminForm.value).toEqual(data);
  // // });
});
