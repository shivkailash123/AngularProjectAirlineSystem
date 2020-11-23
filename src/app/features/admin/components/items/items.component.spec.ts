import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { SelectDialogComponent } from 'src/app/features/check-in/components/flight-list/select-dialog.component';

import { ItemsComponent } from './items.component';

describe('ItemsComponent', () => {
  let component: ItemsComponent;
  let fixture: ComponentFixture<ItemsComponent>;
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
      declarations: [ ItemsComponent, SelectDialogComponent],
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
    fixture = TestBed.createComponent(ItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('checking method', () => {
    component.data1 = ancillaryServices;
    component.dataSource = component.data1;
    component.finalData = services;
    component.ngOnInit();
    component.backToFlight();
  });
  it('open Matdialog Box', () => {
    component.openDialog();
  });
});
