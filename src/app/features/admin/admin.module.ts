import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdmindashboardComponent } from './components/admindashboard/admindashboard.component';
import { MaterialModule } from 'src/app/common-modules/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PasengersperflightComponent } from './components/pasengersperflight/pasengersperflight.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PassengerComponent } from './components/passenger/passenger.component';
import { AddpassengerComponent } from './components/addpassenger/addpassenger.component';
import { AncillaryComponent } from './components/ancillary/ancillary.component';
import { ItemsComponent } from './components/items/items.component';
import { MealsComponent } from './components/meals/meals.component';

@NgModule({
  // tslint:disable-next-line: max-line-length
  declarations: [AdmindashboardComponent, PasengersperflightComponent, PassengerComponent, AddpassengerComponent, AncillaryComponent, ItemsComponent, MealsComponent],
  imports: [
    CommonModule,
    MaterialModule,
    AdminRoutingModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
