import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { AddpassengerComponent } from './addpassenger.component';

describe('AddpassengerComponent', () => {
  let component: AddpassengerComponent;
  let fixture: ComponentFixture<AddpassengerComponent>;
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

  const Pass = {
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
    fid: 12233,
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddpassengerComponent],
      imports: [
        HttpClientModule,
        RouterTestingModule,
        RouterModule.forRoot([]),
        // Location,
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddpassengerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('calling methods', () => {
    component.ngOnInit();
    component.onFormSubmit();
    expect(component.status).toEqual(false);
  });
});
