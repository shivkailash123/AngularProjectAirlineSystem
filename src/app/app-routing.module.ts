import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminAuthGuardService } from './core/guards/admin-auth-guard.service';
import { AuthGuardService } from './core/guards/auth-guard.service';
import { AddservicesComponent } from './features/check-in/components/addservices/addservices.component';
import { ChangeSeatComponent } from './features/check-in/components/change-seat/change-seat.component';
import { FlightDetailComponent } from './features/check-in/components/flight-detail/flight-detail.component';
import { FlightListComponent } from './features/check-in/components/flight-list/flight-list.component';
import { InflightDetailComponent } from './features/check-in/components/inflight-detail/inflight-detail.component';
import { LoginComponent } from './features/login/components/login/login.component';
import { LoginModule } from './features/login/login.module';



const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login',
  loadChildren: () => import('./features/login/login.module').then(m => m.LoginModule)},
  { path: 'flights',
  loadChildren: () => import('./features/check-in/check-in.module').then(m => m.CheckInModule), canActivate: [AuthGuardService]},
  { path: 'admin',
  loadChildren: () => import('./features/admin/admin.module').then(m => m.AdminModule), canActivate: [AdminAuthGuardService]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})


export class AppRoutingModule { }
