import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { HttpApiService } from 'src/app/core/services/http-api.service';

import { ChangeSeatComponent } from './change-seat.component';

describe('ChangeSeatComponent', () => {
  let component: ChangeSeatComponent;
  let fixture: ComponentFixture<ChangeSeatComponent>;
  // tslint:disable-next-line: prefer-const
  let service: HttpApiService;
  // tslint:disable-next-line: prefer-const
  let httpClient: HttpClient;
  const pass = {
    id: 1,
    name: 'Ram Singh Tomar',
    checkedIn: false,
    wheelchairRequired: true,
    infants: false,
    ancillaryServices: 'baggage',
    seatNo: '1A',
    specialMeal: 'Dosa',
    inflightShop: 'Iphone',
    passport: 'AXX12XXX',
    address: 'Mangalore',
    dob: '2014-01-01',
    fid: 12233
  };
  const Passenger = [
    {
      id: 1,
      name: 'Ram Singh Tomar',
      checkedIn: false,
      wheelchairRequired: true,
      infants: false,
      ancillaryServices: 'baggage',
      seatNo: '1A',
      specialMeal: 'Dosa',
      inflightShop: 'Iphone',
      passport: 'AXX12XXX',
      address: 'Mangalore',
      dob: '2014-01-01',
      fid: 12233
    }
  ];
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeSeatComponent ],
      imports: [
        HttpClientModule,
        RouterTestingModule,
        RouterModule.forRoot([]),
        MatDialogModule,
        // FormsModule
       // Location,
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeSeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  // it('checking method', () => {
  //   // component.passengerList = Passenger;
  //   // component.currentPassenger = pass;
  //   // component.name = 'Ram Singh Tomar';
  //   // spyOn(service, 'getPassengersByFlight').and.returnValue(of(Passenger));
  //   // component.ngOnInit();
  //   // component.changeSeat('1A');
  //   // component.validateSeatAvailability('1A');
  // });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  // it('checking for seat', () => {
  //   component.changeSeat('1A');
  // })
});
