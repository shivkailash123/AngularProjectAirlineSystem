import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { HttpApiService } from 'src/app/core/services/http-api.service';
import { LoginComponent } from 'src/app/features/login/components/login/login.component';

import { FlightDetailComponent } from './flight-detail.component';

describe('FlightDetailComponent', () => {
  let component: FlightDetailComponent;
  let fixture: ComponentFixture<FlightDetailComponent>;
  // tslint:disable-next-line: label-position
  let service: HttpApiService;
  // tslint:disable-next-line: prefer-const
  let httpClient: HttpClient;
   // tslint:disable-next-line: prefer-const
  let router: Router;
   // tslint:disable-next-line: prefer-const
  let dialog: MatDialog;
   // tslint:disable-next-line: prefer-const
  let formBuilder: FormBuilder;
  const checkInSeat = [
  {
    seatRowOne: [
      {
        seatNo: '1A',
        checkedIn: false,
        wheelchairRequired: false,
        infants: false,
        allocated: false
      },
      {
        seatNo: '1B',
        checkedIn: false,
        wheelchairRequired: false,
        infants: false,
        allocated: false
      },
      {
        seatNo: '1C',
        checkedIn: false,
        wheelchairRequired: false,
        infants: false,
        allocated: false
      },
      {
        // tslint:disable-next-line: quotemark
        seatNo: '1D',
        checkedIn: false,
        wheelchairRequired: false,
        infants: false,
        allocated: false
      },
      {
        seatNo: '1E',
        checkedIn: false,
        wheelchairRequired: false,
        infants: false,
        allocated: false
      },
      {
        // tslint:disable-next-line: quotemark
        seatNo: '1F',
        checkedIn: false,
        wheelchairRequired: false,
        infants: false,
        allocated: false
      }
    ],
    seatRowTwo: [
      {
        // tslint:disable-next-line: quotemark
        seatNo: '2A',
        checkedIn: false,
        wheelchairRequired: false,
        infants: false,
        allocated: false
      },
      {
        seatNo: '2B',
        checkedIn: false,
        wheelchairRequired: false,
        infants: false,
        allocated: false
      },
      {
        seatNo: '2C',
        checkedIn: false,
        wheelchairRequired: false,
        infants: false,
        allocated: false
      },
      {
        seatNo: '2D',
        checkedIn: false,
        wheelchairRequired: false,
        infants: false,
        allocated: false
      },
      {
        seatNo: '2E',
        checkedIn: false,
        wheelchairRequired: false,
        infants: false,
        allocated: false
      },
      {
        seatNo: '2F',
        checkedIn: false,
        wheelchairRequired: false,
        infants: false,
        allocated: false
      }
    ],
    seatRowThree: [
      {
        seatNo: '3A',
        checkedIn: false,
        wheelchairRequired: false,
        infants: false,
        allocated: false
      },
      {
        seatNo: '3B',
        checkedIn: false,
        wheelchairRequired: false,
        infants: false,
        allocated: false
      },
      {
        seatNo: '3C',
        checkedIn: false,
        wheelchairRequired: false,
        infants: false,
        allocated: false
      },
      {
        seatNo: '3D',
        checkedIn: false,
        wheelchairRequired: false,
        infants: false,
        allocated: false
      },
      {
        seatNo: '3E',
        checkedIn: false,
        wheelchairRequired: false,
        infants: false,
        allocated: false
      },
      {
        seatNo: '3F',
        checkedIn: false,
        wheelchairRequired: false,
        infants: false,
        allocated: false
      }
    ],
    seatRowFour: [
      {
        seatNo: '4A',
        checkedIn: false,
        wheelchairRequired: false,
        infants: false,
        allocated: false
      },
      {
        seatNo: '4B',
        checkedIn: false,
        wheelchairRequired: false,
        infants: false,
        allocated: false
      },
      {
        seatNo: '4C',
        checkedIn: false,
        wheelchairRequired: false,
        infants: false,
        allocated: false
      },
      {
        seatNo: '4D',
        checkedIn: false,
        wheelchairRequired: false,
        infants: false,
        allocated: false
      },
      {
        seatNo: '4E',
        checkedIn: false,
        wheelchairRequired: false,
        infants: false,
        allocated: false
      },
      {
        seatNo: '4F',
        checkedIn: false,
        wheelchairRequired: false,
        infants: false,
        allocated: false
      }
    ],
    seatRowFive: [
      {
        seatNo: '5A',
        checkedIn: false,
        wheelchairRequired: false,
        infants: false,
        allocated: false
      },
      {
        seatNo: '5B',
        checkedIn: false,
        wheelchairRequired: false,
        infants: false,
        allocated: false
      },
      {
        seatNo: '5C',
        checkedIn: false,
        wheelchairRequired: false,
        infants: false,
        allocated: false
      },
      {
        seatNo: '5D',
        checkedIn: false,
        wheelchairRequired: false,
        infants: false,
        allocated: false
      },
      {
        seatNo: '5E',
        checkedIn: false,
        wheelchairRequired: false,
        infants: false,
        allocated: false
      },
      {
        seatNo: '5F',
        checkedIn: false,
        wheelchairRequired: false,
        infants: false,
        allocated: false
      }
    ],
    seatRowSix: [
      {
        seatNo: '6A',
        checkedIn: false,
        wheelchairRequired: false,
        infants: false,
        allocated: false
      },
      {
        seatNo: '6B',
        checkedIn: false,
        wheelchairRequired: false,
        infants: false,
        allocated: false
      },
      {
        seatNo: '6C',
        checkedIn: false,
        wheelchairRequired: false,
        infants: false,
        allocated: false
      },
      {
        seatNo: '6D',
        checkedIn: false,
        wheelchairRequired: false,
        infants: false,
        allocated: false
      },
      {
        seatNo: '6E',
        checkedIn: false,
        wheelchairRequired: false,
        infants: false,
        allocated: false
      },
      {
        seatNo: '6F',
        checkedIn: false,
        wheelchairRequired: false,
        infants: false,
        allocated: false
      }
    ],
    seatRowSeven: [
      {
        seatNo: '7A',
        checkedIn: false,
        wheelchairRequired: false,
        infants: false,
        allocated: false
      },
      {
        seatNo: '7B',
        checkedIn: false,
        wheelchairRequired: false,
        infants: false,
        allocated: false
      },
      {
        seatNo: '7C',
        checkedIn: false,
        wheelchairRequired: false,
        infants: false,
        allocated: false
      },
      {
        seatNo: '7D',
        checkedIn: false,
        wheelchairRequired: false,
        infants: false,
        allocated: false
      },
      {
        seatNo: '7E',
        checkedIn: false,
        wheelchairRequired: false,
        infants: false,
        allocated: false
      },
      {
        seatNo: '7F',
        checkedIn: false,
        wheelchairRequired: false,
        infants: false,
        allocated: false
      }
    ],
    seatRowEight: [
      {
        seatNo: '8A',
        checkedIn: false,
        wheelchairRequired: false,
        infants: false,
        allocated: false
      },
      {
        seatNo: '8B',
        checkedIn: false,
        wheelchairRequired: false,
        infants: false,
        allocated: false
      },
      {
        seatNo: '8C',
        checkedIn: false,
        wheelchairRequired: false,
        infants: false,
        allocated: false
      },
      {
        seatNo: '8D',
        checkedIn: false,
        wheelchairRequired: false,
        infants: false,
        allocated: false
      },
      {
        seatNo: '8E',
        checkedIn: false,
        wheelchairRequired: false,
        infants: false,
        allocated: false
      },
      {
        seatNo: '8F',
        checkedIn: false,
        wheelchairRequired: false,
        infants: false,
        allocated: false
      }
    ],
    seatRowNine: [
      {
        seatNo: '9A',
        checkedIn: false,
        wheelchairRequired: false,
        infants: false,
        allocated: false
      },
      {
        seatNo: '9B',
        checkedIn: false,
        wheelchairRequired: false,
        infants: false,
        allocated: false
      },
      {
        seatNo: '9C',
        checkedIn: false,
        wheelchairRequired: false,
        infants: false,
        allocated: false
      },
      {
        seatNo: '9D',
        checkedIn: false,
        wheelchairRequired: false,
        infants: false,
        allocated: false
      },
      {
        seatNo: '9E',
        checkedIn: false,
        wheelchairRequired: false,
        infants: false,
        allocated: false
      },
      {
        seatNo: '9F',
        checkedIn: false,
        wheelchairRequired: false,
        infants: false,
        allocated: false
      }
    ], seatRowTen: [
      {
        seatNo: '10A',
        checkedIn: false,
        wheelchairRequired: false,
        infants: false,
        allocated: false
      },
      {
        seatNo: '10B',
        checkedIn: false,
        wheelchairRequired: false,
        infants: false,
        allocated: false
      },
      {
        seatNo: '10C',
        checkedIn: false,
        wheelchairRequired: false,
        infants: false,
        allocated: false
      },
      {
        seatNo: '10D',
        checkedIn: false,
        wheelchairRequired: false,
        infants: false,
        allocated: false
      },
      {
        seatNo: '10E',
        checkedIn: false,
        wheelchairRequired: false,
        infants: false,
        allocated: false
      },
      {
        seatNo: '10F',
        checkedIn: false,
        wheelchairRequired: false,
        infants: false,
        allocated: false
      }
    ],
  }
];
  const detail = [checkInSeat];
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
      declarations: [FlightDetailComponent],
      imports: [
        HttpClientModule,
        RouterTestingModule,
        RouterModule.forRoot([]),
        ReactiveFormsModule,
        // Location,
      ],
      providers: [
        {
          provide: HttpApiService,
        },
        {
          provide: LoginComponent,
        },
        HttpApiService,
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightDetailComponent);
    // tslint:disable-next-line: deprecation
    service = TestBed.get(HttpApiService);
    component = new FlightDetailComponent(service, router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('checking selected value', () => {
    expect(component.selected).toBe(false);
  });
  it('checking method', () => {
    component.seatRowOne = checkInSeat[0].seatRowOne;
    component.seatRowTwo = checkInSeat[0].seatRowTwo;
    component.seatRowThree = checkInSeat[0].seatRowThree;
    component.seatRowFour = checkInSeat[0].seatRowFour;
    component.seatRowFive = checkInSeat[0].seatRowFive;
    component.seatRowSix = checkInSeat[0].seatRowSix;
    component.seatRowSeven = checkInSeat[0].seatRowSeven;
    component.seatRowEight = checkInSeat[0].seatRowEight;
    component.seatRowNine = checkInSeat[0].seatRowNine;
    component.seatRowTen = checkInSeat[0].seatRowTen;
    component.passengers = Passenger;
    component.currentPassenger = pass;
    // spyOn(service, 'getPassengersByFlight').and.returnValue(of(Passenger));
    component.ngOnInit();
    // component.ngOnInit();
    // component.selectInFlight();
    component.checkboxClicked('1A');
    component.seatDetail(checkInSeat);
    component.passengerByFlight();

  });
  it('checking method is called or not', () => {
    // spyOn(service, 'getSeatForCheckIn');
    // spyOn(service, 'getPassengersByFlight').and.returnValue(of(Passenger));
    // expect(service.getSeatForCheckIn).toHaveBeenCalled();
  });

});
