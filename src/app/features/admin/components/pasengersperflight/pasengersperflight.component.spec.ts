import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { SelectDialogComponent } from 'src/app/features/check-in/components/flight-list/select-dialog.component';

import { PasengersperflightComponent } from './pasengersperflight.component';

describe('PasengersperflightComponent', () => {
  let component: PasengersperflightComponent;
  let fixture: ComponentFixture<PasengersperflightComponent>;
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
  const value = {value: 'all', viewValue: 'No Filter'};
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasengersperflightComponent, SelectDialogComponent ],
      imports: [
        HttpClientModule,
        RouterTestingModule,
        RouterModule.forRoot([]),
        ReactiveFormsModule,
        MatDialogModule,
        BrowserAnimationsModule
       // Location,
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PasengersperflightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('checking method', () => {
     component.data1 = Passenger;
     component.selection.selected.length = 3;
     component.selection.selected[0] = pass;
     component.ngOnInit();
     component.onFilterChange(value);
     component.selectPassenger();
     component.addPassenger();
     component.backToPassengerList();
  });
  it('checking passport', () => {
    // tslint:disable-next-line: no-shadowed-variable
    const value = {value: 'passport', viewValue: 'No Filter'};
    component.onFilterChange(value);
  });
  it('checking address', () => {
    // tslint:disable-next-line: no-shadowed-variable
    const value = {value: 'address', viewValue: 'No Filter'};
    component.onFilterChange(value);
  });
  it('checking dob', () => {
    // tslint:disable-next-line: no-shadowed-variable
    const value = {value: 'dob', viewValue: 'No Filter'};
    component.onFilterChange(value);
  });
  it('open dialog in selectPassenger', () => {
    component.selection.selected.length = 0;
    component.selectPassenger();
  });
  it('open dialog', () => {
   component.openDialog();
  });
});
