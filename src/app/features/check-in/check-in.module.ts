import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightListComponent } from './components/flight-list/flight-list.component';
import { MaterialModule } from 'src/app/common-modules/material/material.module';
import { CheckInRoutingModule } from './check-in-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FlightDetailComponent } from './components/flight-detail/flight-detail.component';
import { PassengerListComponent } from './components/passenger-list/passenger-list.component';
import { FormsModule } from '@angular/forms';
import { ChangeSeatComponent } from './components/change-seat/change-seat.component';
import { InflightDetailComponent } from './components/inflight-detail/inflight-detail.component';
import { AddservicesComponent } from './components/addservices/addservices.component';
import { SelectDialogComponent } from './components/flight-list/select-dialog.component';



@NgModule({
  // tslint:disable-next-line: max-line-length
  declarations: [FlightListComponent, FlightDetailComponent, PassengerListComponent, InflightDetailComponent, ChangeSeatComponent, AddservicesComponent, SelectDialogComponent],
  imports: [
    CommonModule,
    MaterialModule,
    CheckInRoutingModule,
    FlexLayoutModule,
    FormsModule
  ]
})
export class CheckInModule { }

