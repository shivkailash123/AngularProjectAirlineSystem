import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Passenger } from 'src/app/common-modules/shared/interfaces/passenger';
import { HttpApiService } from 'src/app/core/services/http-api.service';

@Component({
  selector: 'app-addpassenger',
  templateUrl: './addpassenger.component.html',
  styleUrls: ['./addpassenger.component.scss']
})
export class AddpassengerComponent implements OnInit {
  selected: boolean;
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
    this.service.getAllPassengers().subscribe((response: any) => {
      console.log(response.length);
      this.passenger.id = response.length + 1;
    });
    this.passenger.fid = this.service.currentFid;
  }
  onFormSubmit(): void {
    this.service.addPassengerDetails(this.passenger).subscribe((response: any) => {
      alert('added successfull');
      this.status = true;
    });
  }
}
