import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { HttpApiService } from 'src/app/core/services/http-api.service';
import { FlightListComponent } from './flight-list.component';
import { SelectDialogComponent } from './select-dialog.component';


const data1 = [{
  id: 12233,
  scheduleDate: '2014-01-01',
  time: '23:28:56',
  source: 'Bangalore',
  destination: 'Delhi',
}];

const flight = {
  id: 12233,
  scheduleDate: '2014-01-01',
  time: '23:28:56',
  source: 'Bangalore',
  destination: 'Delhi',
};

const value = true;

// tslint:disable-next-line: one-variable-per-declaration
// tslint:disable-next-line: prefer-const
let service: HttpApiService;
describe('FlightListComponent', () => {
  let component: FlightListComponent;
  let fixture: ComponentFixture<FlightListComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FlightListComponent, SelectDialogComponent],
      imports: [
        HttpClientModule,
        RouterTestingModule,
        RouterModule.forRoot([]),
        ReactiveFormsModule,
        MatDialogModule,
        BrowserAnimationsModule
        // Location,
      ],
      providers: [
        {
          provide: HttpApiService,
        }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  // tslint:disable-next-line: deprecation
  it('should print the product details', () => {
    component.selection.selected.length = 1;
    component.flightList = data1;
    component.selection.selected[0] = flight;
    // spyOn(service, 'getFlights').and.returnValue(of(data1));
    component.ngOnInit();
    component.selectFlight();
    component.selectCheckIn();
    component.selectCheckIn();
    expect(component.flightList).toEqual(data1);
  });
});
