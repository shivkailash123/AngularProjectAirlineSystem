import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { SelectDialogComponent } from '../flight-list/select-dialog.component';

import { AddservicesComponent } from './addservices.component';

describe('AddservicesComponent', () => {
  let component: AddservicesComponent;
  let fixture: ComponentFixture<AddservicesComponent>;
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

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddservicesComponent, SelectDialogComponent],
      imports: [FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        RouterTestingModule,
        RouterModule.forRoot([]),
        MatDialogModule,
        BrowserAnimationsModule
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Testing on form submit method', () => {
    expect(component.onFormSubmit).toBeTruthy();
  });
  it('Testing ngInit method', () => {
    expect(component.ngOnInit).toBeTruthy();
  });
  it('checking dialog box', () => {
    expect(component.dialog).toBeTruthy();
  });
  it('checking value of id', () => {
    expect(component.passenger.id).toEqual(0);
  });
  it('checking method', () => {
    component.passenger = pass;
    component.ngOnInit();
    component.onFormSubmit();
    component.openDialog();
  });


});
