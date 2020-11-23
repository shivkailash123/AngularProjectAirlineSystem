import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { HttpApiService } from './http-api.service';

describe('HttpApiService', () => {
  let service: HttpApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        RouterTestingModule,
        RouterModule.forRoot([]),
        ReactiveFormsModule
       // Location,
      ],
    });
    service = TestBed.inject(HttpApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
