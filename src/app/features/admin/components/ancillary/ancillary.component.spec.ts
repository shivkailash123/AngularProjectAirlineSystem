import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs/internal/observable/of';
import { SelectDialogComponent } from 'src/app/features/check-in/components/flight-list/select-dialog.component';

import { AncillaryComponent } from './ancillary.component';

describe('AncillaryComponent', () => {
  let component: AncillaryComponent;
  let fixture: ComponentFixture<AncillaryComponent>;
   // tslint:disable-next-line: prefer-const
  let ancillaryServices: [
    'baggage',
    'wifi',
    'Car Service'
  ];

  // tslint:disable-next-line: prefer-const
  let services: {
      id: 1,
      fid: 12233,
      ancillaryServices: [
        'baggage',
        'wifi',
        'Car Service'
      ],
      inflightShop: [],
      specialMeal: [
        'Dosa',
        'Poori'
      ]
    };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AncillaryComponent, SelectDialogComponent],
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
    fixture = TestBed.createComponent(AncillaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('checking method', () => {
    component.data1 = ancillaryServices;
    component.dataSource = component.data1;
    // component.finalData = services;
    // component.finalData.ancillaryServices = services.ancillaryServices;
    component.ngOnInit();
    component.backToFlight();
    // component.add('shiv');
  });
  it('open Matdialog Box', () => {
    component.openDialog();
  });
  it('checking backtoFlight', () => {
    component.backToFlight();
  });
});
