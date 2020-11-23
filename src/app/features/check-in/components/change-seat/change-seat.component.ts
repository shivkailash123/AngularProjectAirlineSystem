import { Component, Input, OnInit } from '@angular/core';
import { Passenger } from 'src/app/common-modules/shared/interfaces/passenger';
import { HttpApiService } from 'src/app/core/services/http-api.service';

@Component({
  selector: 'app-change-seat',
  templateUrl: './change-seat.component.html',
  styleUrls: ['./change-seat.component.scss']
})
export class ChangeSeatComponent implements OnInit {

  currentPassenger: Passenger;
  occupiedSeatList: string[] = [];
  passengerList: Passenger[];
  name: string;
  constructor(private service: HttpApiService) { }

  ngOnInit(): void {
    this.currentPassenger = this.service.getCurrentPassenger();
    this.service.getPassengersByFlight().subscribe(
      (response: any) => {
        this.passengerList = response;
        this.name = response.name;
      },
      errorResponse => { console.log(errorResponse); },
      );
  }
  changeSeat(seatNo: any): void {
    this.occupiedSeatList = [];
    for (const passenger of this.passengerList) {
      this.occupiedSeatList.push(passenger.seatNo);
    }
    if (this.inputValidator(seatNo.toUpperCase())){
      if (this.validateSeatAvailability(seatNo.toUpperCase())) {
        alert('Seat already occupied');
      }
      else {
        this.currentPassenger.seatNo = seatNo.toUpperCase();
        this.service.updatePassenngerSeat(this.currentPassenger).subscribe(
          (response: any) => {
            alert('Seat Updated');
          },
          () => {
            alert('Failed to update seat');
          }
        );
      }
    }
    else {
      alert('Invalid Seat No.');
    }
}

  validateSeatAvailability(seatNo: any): boolean {
    for (const seat of this.occupiedSeatList) {
      if (seatNo === seat) {
        return true;
      }
    }
  }

public inputValidator(seatNo: any): boolean {
  const pattern = /^([0-9][A-F]|[1][0][A-F])/;
  if (!pattern.test(seatNo)) {
    return false;
  }
  return true;
}

}
