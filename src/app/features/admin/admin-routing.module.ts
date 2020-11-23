import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddpassengerComponent } from './components/addpassenger/addpassenger.component';
import { AdmindashboardComponent } from './components/admindashboard/admindashboard.component';
import { AncillaryComponent } from './components/ancillary/ancillary.component';
import { ItemsComponent } from './components/items/items.component';
import { PasengersperflightComponent } from './components/pasengersperflight/pasengersperflight.component';
import { PassengerComponent } from './components/passenger/passenger.component';

const routes: Routes = [
  {
    path: '',
    component: AdmindashboardComponent,
    children: [
      {path: 'passengers', component: PasengersperflightComponent},
      {path: 'passenger', component: PassengerComponent},
      {path: 'addpassenger', component: AddpassengerComponent},
      {path: 'ancillary', component: AncillaryComponent},
      {path: 'items', component: ItemsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
