import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Router, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { HttpApiService } from 'src/app/core/services/http-api.service';

import { InflightDetailComponent } from './inflight-detail.component';

describe('InflightDetailComponent', () => {
  let component: InflightDetailComponent;
  let fixture: ComponentFixture<InflightDetailComponent>;
  // tslint:disable-next-line: prefer-const
  let service: HttpApiService;
  // tslint:disable-next-line: prefer-const
  let httpClient: HttpClient;
  // tslint:disable-next-line: prefer-const
  let router: Router;
  // tslint:disable-next-line: prefer-const
  let dialog: MatDialog;
  // tslint:disable-next-line: prefer-const
  let formBuilder: FormBuilder;
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
    },
    {
      id: 2,
      name: 'Samson',
      checkedIn: false,
      wheelchairRequired: true,
      infants: true,
      ancillaryServices: 'wifi',
      seatNo: '2B',
      specialMeal: 'kjasdgf',
      inflightShop: 'Iphone',
      passport: 'AXX12XXX',
      address: 'Delhi',
      dob: '',
      fid: 12233
    },
    {
      id: 3,
      name: 'Samson',
      checkedIn: false,
      wheelchairRequired: true,
      infants: true,
      ancillaryServices: 'wifi',
      seatNo: '3B',
      specialMeal: 'kjasdgf',
      inflightShop: 'Iphone',
      passport: 'AXX12XXX',
      address: 'Delhi',
      dob: '',
      fid: 12233
    },
    {
      id: 4,
      name: 'Samson',
      checkedIn: false,
      wheelchairRequired: true,
      infants: true,
      ancillaryServices: 'wifi',
      seatNo: '4B',
      specialMeal: 'kjasdgf',
      inflightShop: 'Iphone',
      passport: 'AXX12XXX',
      address: 'Delhi',
      dob: '',
      fid: 12233
    },
    {
      id: 5,
      name: 'Samson',
      checkedIn: false,
      wheelchairRequired: true,
      infants: true,
      ancillaryServices: 'wifi',
      seatNo: '5B',
      specialMeal: 'kjasdgf',
      inflightShop: 'Iphone',
      passport: 'AXX12XXX',
      address: 'Delhi',
      dob: '',
      fid: 12233
    },
    {
      id: 6,
      name: 'Samson',
      checkedIn: false,
      wheelchairRequired: true,
      infants: true,
      ancillaryServices: 'wifi',
      seatNo: '6B',
      specialMeal: 'kjasdgf',
      inflightShop: 'Iphone',
      passport: 'AXX12XXX',
      address: 'Delhi',
      dob: '',
      fid: 12233
    },
    {
      id: 7,
      name: 'Samson',
      checkedIn: false,
      wheelchairRequired: true,
      infants: true,
      ancillaryServices: 'wifi',
      seatNo: '7B',
      specialMeal: 'kjasdgf',
      inflightShop: 'Iphone',
      passport: 'AXX12XXX',
      address: 'Delhi',
      dob: '',
      fid: 12233
    },
    {
      id: 8,
      name: 'Samson',
      checkedIn: false,
      wheelchairRequired: true,
      infants: true,
      ancillaryServices: 'wifi',
      seatNo: '8B',
      specialMeal: 'kjasdgf',
      inflightShop: 'Iphone',
      passport: 'AXX12XXX',
      address: 'Delhi',
      dob: '',
      fid: 12233
    },
    {
      id: 9,
      name: 'Samson',
      checkedIn: false,
      wheelchairRequired: true,
      infants: true,
      ancillaryServices: 'wifi',
      seatNo: '9B',
      specialMeal: 'kjasdgf',
      inflightShop: 'Iphone',
      passport: 'AXX12XXX',
      address: 'Delhi',
      dob: '',
      fid: 12233
    },
    {
      id: 10,
      name: 'Samson',
      checkedIn: false,
      wheelchairRequired: true,
      infants: true,
      ancillaryServices: 'wifi',
      seatNo: '10B',
      specialMeal: 'kjasdgf',
      inflightShop: 'Iphone',
      passport: 'AXX12XXX',
      address: 'Delhi',
      dob: '',
      fid: 12233
    },
  ];
  const checkMeal = [
    {
      seatRowOne: [
        {
          seatNo: '1A',
          specialMeal: false
        },
        {
          seatNo: '1B',
          specialMeal: false
        },
        {
          seatNo: '1C',
          specialMeal: false
        },
        {
          seatNo: '1D',
          specialMeal: false
        },
        {
          seatNo: '1E',
          specialMeal: false
        },
        {
          seatNo: '1F',
          specialMeal: false
        }
      ],
      seatRowTwo: [
        {
          seatNo: '2A',
          specialMeal: false
        },
        {
          seatNo: '2B',
          specialMeal: false
        },
        {
          seatNo: '2C',
          specialMeal: false
        },
        {
          seatNo: '2D',
          specialMeal: false
        },
        {
          seatNo: '2E',
          specialMeal: false
        },
        {
          seatNo: '2F',
          specialMeal: false
        }
      ],
      seatRowThree: [
        {
          seatNo: '3A',
          specialMeal: false
        },
        {
          seatNo: '3B',
          specialMeal: false
        },
        {
          seatNo: '3C',
          specialMeal: false
        },
        {
          seatNo: '3D',
          specialMeal: false
        },
        {
          seatNo: '3E',
          specialMeal: false
        },
        {
          seatNo: '3F',
          specialMeal: false
        }
      ],
      seatRowFour: [
        {
          seatNo: '4A',
          specialMeal: false
        },
        {
          seatNo: '4B',
          specialMeal: false
        },
        {
          seatNo: '4C',
          specialMeal: false
        },
        {
          seatNo: '4D',
          specialMeal: false
        },
        {
          seatNo: '4E',
          specialMeal: false
        },
        {
          seatNo: '4F',
          specialMeal: false
        }
      ],
      seatRowFive: [
        {
          seatNo: '5A',
          specialMeal: false
        },
        {
          seatNo: '5B',
          specialMeal: false
        },
        {
          seatNo: '5C',
          specialMeal: false
        },
        {
          seatNo: '5D',
          specialMeal: false
        },
        {
          seatNo: '5E',
          specialMeal: false
        },
        {
          seatNo: '5F',
          specialMeal: false
        }
      ],
      seatRowSix: [
        {
          seatNo: '6A',
          specialMeal: false
        },
        {
          seatNo: '6B',
          specialMeal: false
        },
        {
          seatNo: '6C',
          specialMeal: false
        },
        {
          seatNo: '6D',
          specialMeal: false
        },
        {
          seatNo: '6E',
          specialMeal: false
        },
        {
          seatNo: '6F',
          specialMeal: false
        }
      ],
      seatRowSeven: [
        {
          seatNo: '7A',
          specialMeal: false
        },
        {
          seatNo: '7B',
          specialMeal: false
        },
        {
          seatNo: '7C',
          specialMeal: false
        },
        {
          seatNo: '7D',
          specialMeal: false
        },
        {
          seatNo: '7E',
          specialMeal: false
        },
        {
          seatNo: '7F',
          specialMeal: false
        }
      ],
      seatRowEight: [
        {
          seatNo: '8A',
          specialMeal: false
        },
        {
          seatNo: '8B',
          specialMeal: false
        },
        {
          seatNo: '8C',
          specialMeal: false
        },
        {
          seatNo: '8D',
          specialMeal: false
        },
        {
          seatNo: '8E',
          specialMeal: false
        },
        {
          seatNo: '8F',
          specialMeal: false
        }
      ],
      seatRowNine: [
        {
          seatNo: '9A',
          specialMeal: false
        },
        {
          seatNo: '9B',
          specialMeal: false
        },
        {
          seatNo: '9C',
          specialMeal: false
        },
        {
          seatNo: '9D',
          specialMeal: false
        },
        {
          seatNo: '9E',
          specialMeal: false
        },
        {
          seatNo: '9F',
          specialMeal: false
        }
      ],
      seatRowTen: [
        {
          seatNo: '10A',
          specialMeal: false
        },
        {
          seatNo: '10B',
          specialMeal: false
        },
        {
          seatNo: '10C',
          specialMeal: false
        },
        {
          seatNo: '10D',
          specialMeal: false
        },
        {
          seatNo: '10E',
          specialMeal: false
        },
        {
          seatNo: '10F',
          specialMeal: false
        }
      ],
    }
  ];
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
      declarations: [InflightDetailComponent],
      imports: [
        HttpClientModule,
        RouterTestingModule,
        RouterModule.forRoot([]),
        ReactiveFormsModule,
        MatDialogModule
        // Location,
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InflightDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('checking method', () => {
    component.seatRowOne = checkMeal[0].seatRowOne;
    component.seatRowTwo = checkMeal[0].seatRowTwo;
    component.seatRowThree = checkMeal[0].seatRowThree;
    component.seatRowFour = checkMeal[0].seatRowFour;
    component.seatRowFive = checkMeal[0].seatRowFive;
    component.seatRowSix = checkMeal[0].seatRowSix;
    component.seatRowSeven = checkMeal[0].seatRowSeven;
    component.seatRowEight = checkMeal[0].seatRowEight;
    component.seatRowNine = checkMeal[0].seatRowNine;
    component.seatRowTen = checkMeal[0].seatRowTen;
    component.passengers = Passenger;
    component.currentPassenger = pass;
    component.selection.selected[0] = pass;
    component.passengers = Passenger;
    component.passengerList = Passenger;
    component.data1 = Passenger;
    component.ngOnInit();
    component.checkboxClicked('1A');
    component.selection.selected.length = 3;
    component.selectPassenger();
    // component.backToPassengerList();
    component.onFormSubmit();
  });

  it('checking method with branches', () => {
    component.seatRowOne = checkMeal[0].seatRowOne;
    component.seatRowTwo = checkMeal[0].seatRowTwo;
    component.seatRowThree = checkMeal[0].seatRowThree;
    component.seatRowFour = checkMeal[0].seatRowFour;
    component.seatRowFive = checkMeal[0].seatRowFive;
    component.seatRowSix = checkMeal[0].seatRowSix;
    component.seatRowSeven = checkMeal[0].seatRowSeven;
    component.seatRowEight = checkMeal[0].seatRowEight;
    component.seatRowNine = checkMeal[0].seatRowNine;
    component.seatRowTen = checkMeal[0].seatRowTen;
    component.passengers = Passenger;
    component.currentPassenger = pass;
    component.selection.selected[0] = pass;
    component.seatDetail(checkMeal);
    component.passengerByFlight();
  });
});
