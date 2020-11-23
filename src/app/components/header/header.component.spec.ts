import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from 'src/app/app.component';
import { HttpApiService } from 'src/app/core/services/http-api.service';
import { LoginComponent } from 'src/app/features/login/components/login/login.component';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  // let component: HeaderComponent;
  // let fixture: ComponentFixture<HeaderComponent>;

  // beforeEach(waitForAsync(() => {
  //   TestBed.configureTestingModule({
  //     declarations: [ HeaderComponent, LoginComponent, AppComponent ],
  //     imports: [
  //       RouterTestingModule,
  //       RouterModule.forRoot([]),
  //       ReactiveFormsModule,
  //      // Location,
  //     ], providers: [
  //       {
  //         provide: HttpApiService,
  //       },
  //       {
  //         provide: LoginComponent,
  //       }
  //     ]
  //   })
  //   .compileComponents();
  // }));

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(HeaderComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
