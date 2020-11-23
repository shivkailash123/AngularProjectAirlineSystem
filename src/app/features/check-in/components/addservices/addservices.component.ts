import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Passenger } from 'src/app/common-modules/shared/interfaces/passenger';
import { HttpApiService } from 'src/app/core/services/http-api.service';
import { SelectDialogComponent } from '../flight-list/select-dialog.component';

@Component({
  selector: 'app-addservices',
  templateUrl: './addservices.component.html',
  styleUrls: ['./addservices.component.scss']
})
export class AddservicesComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, private service: HttpApiService, private router: Router, public dialog: MatDialog) { }
  ancillaryService: string[] = [];
  inflightShop: string[] = [];
  specialMeal: string[] = [];
  flightId: number;
  passenger: Passenger = {
    id: 0,
    name: '',
    checkedIn: false,
    wheelchairRequired: false,
    infants: false,
    ancillaryServices: '',
    seatNo: '',
    specialMeal: '',
    inflightShop: '',
    passport: '',
    address: '',
    dob: '',
    fid: 0
  };
  status = false;
  ngOnInit(): void {
    this.service.getPassengerById().subscribe((response: Passenger) => {
      this.passenger = response[0];
      this.flightId = response[0].fid;
      console.log(response[0].fid);
      console.log(this.flightId);
      console.log(this.passenger);
    });
    this.service.getFlightServices().subscribe((response) => {
      console.log(response[0]);
      this.ancillaryService = response[0].ancillaryServices;
      this.inflightShop = response[0].inflightShop;
      this.specialMeal = response[0].specialMeal;
      console.log(this.ancillaryService);
      console.log(this.inflightShop);
    });
  }
  onFormSubmit(): void {
    this.service.updatePassengerDetails(this.passenger).subscribe((response: any) => {
      alert('update successfull');
      this.status = true;
    });
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(SelectDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
