import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';

import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { PassengerListComponent } from './passenger-list.component';

describe('PassengerListComponent', () => {
  let component: PassengerListComponent;
  let fixture: ComponentFixture<PassengerListComponent>;
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
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassengerListComponent ],
      imports: [
        HttpClientModule,
        RouterTestingModule,
        RouterModule.forRoot([]),
        MatDialogModule
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PassengerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Checking method', () => {
    component.passengerList = Passenger;
    component.filteredDataSource = Passenger;
    component.dataSource = Passenger;
    component.ngOnInit();
    component.applyFilter('wheelChair');
    component.resetFilter();
    component.changeSeat();
  });
});
