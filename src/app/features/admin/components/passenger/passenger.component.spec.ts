import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { PassengerComponent } from './passenger.component';

describe('PassengerComponent', () => {
  let component: PassengerComponent;
  let fixture: ComponentFixture<PassengerComponent>;
  const pass =  {
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
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassengerComponent ],
      imports: [
        HttpClientModule,
        RouterTestingModule,
        RouterModule.forRoot([]),
        ReactiveFormsModule,
        FormsModule
       // Location,
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PassengerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('testing method', () => {
    component.passenger = pass;
    component.ngOnInit();
    component.onFormSubmit();
  });
});
