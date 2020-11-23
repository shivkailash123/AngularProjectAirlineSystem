import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { SelectDialogComponent } from 'src/app/features/check-in/components/flight-list/select-dialog.component';
import { AdmindashboardComponent } from './admindashboard.component';

describe('AdmindashboardComponent', () => {
  let component: AdmindashboardComponent;
  let fixture: ComponentFixture<AdmindashboardComponent>;

  const flight = {
    id: 12233,
    scheduleDate: '2014-01-01',
    time: '23:28:56',
    source: 'Bangalore',
    destination: 'Delhi',
  };

  const data1 = [{
    id: 12233,
    scheduleDate: '2014-01-01',
    time: '23:28:56',
    source: 'Bangalore',
    destination: 'Delhi',
  }];


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmindashboardComponent, SelectDialogComponent],
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
    fixture = TestBed.createComponent(AdmindashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('checking all methods', () => {
    component.flightList = data1;
    component.selection.selected.length = 1;
    component.selection.selected[0] = flight;
    component.ngOnInit();
    component.selectFlight();
    component.manageItems();
    component.manageMeals();
    component.manageServices();
    component.backToFlight();
  });
  it('checking selectFlightOpenDialog', () => {
    component.selection.selected.length = 0;
    component.selectFlight();
  });
  it('checking manageServicesOpenDialog', () => {
    component.selection.selected.length = 0;
    component.manageServices();
  });
});
