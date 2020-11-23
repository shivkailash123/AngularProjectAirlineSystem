import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Passenger } from 'src/app/common-modules/shared/interfaces/passenger';
import { HttpApiService } from 'src/app/core/services/http-api.service';


@Component({
  selector: 'app-passenger',
  templateUrl: './passenger.component.html',
  styleUrls: ['./passenger.component.scss']
})
export class PassengerComponent implements OnInit {
  constructor( private service: HttpApiService, private router: Router) { }
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
      console.log(this.passenger);
    });
  }
  onFormSubmit(): void {
    this.service.updatePassengerDetails(this.passenger).subscribe((response: any) => {
      alert('update successfull');
      this.status = true;
    });
  }
}
