import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChangeSeatComponent } from './components/change-seat/change-seat.component';
import { FlightDetailComponent } from './components/flight-detail/flight-detail.component';
import { FlightListComponent } from './components/flight-list/flight-list.component';
import { InflightDetailComponent } from './components/inflight-detail/inflight-detail.component';
import { PassengerListComponent } from './components/passenger-list/passenger-list.component';

const routes: Routes = [
  {
    path: '',
    component: FlightListComponent
  },
  { path: 'passengers', component: PassengerListComponent },
  { path: 'flightdetails', component: FlightDetailComponent },
  { path: 'inflight', component: InflightDetailComponent },
  { path: 'changeseat', component: ChangeSeatComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CheckInRoutingModule { }
