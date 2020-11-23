import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Passenger } from 'src/app/common-modules/shared/interfaces/passenger';
import { Seat } from 'src/app/common-modules/shared/interfaces/seat';
import { HttpApiService } from 'src/app/core/services/http-api.service';

@Component({
  selector: 'app-flight-detail',
  templateUrl: './flight-detail.component.html',
  styleUrls: ['./flight-detail.component.scss']
})
export class FlightDetailComponent implements OnInit {

  constructor(private service: HttpApiService, private router: Router) { }
  passengers: Passenger[];
  currentPassenger: Passenger;
  seatPresent = false;
  fid: number;
  selected = false;
  flag = false;

  seatRowOne: Seat[] = [];
  seatRowTwo: Seat[] = [];
  seatRowThree: Seat[] = [];
  seatRowFour: Seat[] = [];
  seatRowFive: Seat[] = [];
  seatRowSix: Seat[] = [];
  seatRowSeven: Seat[] = [];
  seatRowEight: Seat[] = [];
  seatRowNine: Seat[] = [];
  seatRowTen: Seat[] = [];

  public selectInFlight(): void {
    // this.router.navigateByUrl("/flights/inflight");
    console.log('select');
    this.router.navigate(['/flights/inflight']);
  }

  async checkboxClicked(value): Promise<void> {
    console.log('value from it' + value);
    this.passengers.forEach(async (element) => {
      console.log('clicked');
      if (element.seatNo === value) {
        this.seatPresent = true;
        console.log(value);
        console.log(element.seatNo);
        await this.service.getCheckInStatusUsingSeatNumber(value).toPromise().then(
          (response: any) => {
            this.currentPassenger = response[0];
            console.log(this.currentPassenger);
            console.log(this.currentPassenger.checkedIn);
            if (this.currentPassenger.checkedIn === false) {
              this.currentPassenger.checkedIn = true;
              console.log(this.currentPassenger);
            } else {
              this.currentPassenger.checkedIn = false;
              console.log(this.currentPassenger);
            }
            console.log(this.currentPassenger);
            this.service.updateCheckInStatus(this.currentPassenger).subscribe(
              (response1: any) => {
                this.currentPassenger = response1;
                this.ngOnInit();
              },
              () => {
                console.log('Error while fetching flight list');
              },
            );
          },
          () => {
            console.log('Error while fetching flight list');
          }
        );
      }
    });
    if (this.seatPresent === false) {
      alert('Seat is not booked');
      this.ngOnInit();
      console.log('Seat is not booked');
    }

  }

  ngOnInit(): void {
    this.fid = this.service.fId;
    this.service.getSeatForCheckIn().subscribe(
      (response1: any) => {
        this.seatDetail(response1);
      },
      () => {
        console.log('Error while fetching flight list');
      },
    );

    this.service.getPassengersByFlight().subscribe(
      (response: any) => {
        this.passengers = response;
        this.passengerByFlight();
      },

      () => {
        console.log('Error while fetching passenger list');
      },
    );
  }

  seatDetail(response1): void {
    console.log(response1[0]);
    this.seatRowOne = response1[0].seatRowOne;
    this.seatRowTwo = response1[0].seatRowTwo;
    this.seatRowThree = response1[0].seatRowThree;
    this.seatRowFour = response1[0].seatRowFour;
    this.seatRowFive = response1[0].seatRowFive;
    this.seatRowSix = response1[0].seatRowSix;
    this.seatRowSeven = response1[0].seatRowSeven;
    this.seatRowEight = response1[0].seatRowEight;
    this.seatRowNine = response1[0].seatRowNine;
    this.seatRowTen = response1[0].seatRowTen;
  }
  passengerByFlight(): void {
    this.seatRowOne.forEach((element) => {
      this.passengers.forEach((pass) => {
        if (element.seatNo === pass.seatNo) {
          element.allocated = true;
          if (pass.checkedIn === true) {
            element.checkedIn = true;
            console.log(element.seatNo);
            console.log(pass.seatNo);
          }
          if (pass.infants === true) {
            element.infants = true;
          }
          if (pass.wheelchairRequired === true) {
            element.wheelchairRequired = true;
          }
        }
      });
    }

    );
    console.log(this.seatRowOne);
    this.seatRowTwo.forEach((element) => {
      this.passengers.forEach((pass) => {
        if (element.seatNo === pass.seatNo) {
          element.allocated = true;
          if (pass.checkedIn === true) {
            element.checkedIn = true;
            console.log(element.seatNo);
            console.log(pass.seatNo);
          }
          if (pass.infants === true) {
            element.infants = true;
          }
          if (pass.wheelchairRequired === true) {
            element.wheelchairRequired = true;
          }
        }
      });
    }

    );
    this.seatRowThree.forEach((element) => {
      this.passengers.forEach((pass) => {
        if (element.seatNo === pass.seatNo) {
          element.allocated = true;
          if (pass.checkedIn === true) {
            element.checkedIn = true;
            console.log(element.seatNo);
            console.log(pass.seatNo);
          }
          if (pass.infants === true) {
            element.infants = true;
          }
          if (pass.wheelchairRequired === true) {
            element.wheelchairRequired = true;
          }
        }
      });
    }

    );
    this.seatRowFour.forEach((element) => {
      this.passengers.forEach((pass) => {
        if (element.seatNo === pass.seatNo) {
          element.allocated = true;
          if (pass.checkedIn === true) {
            element.checkedIn = true;
            console.log(element.seatNo);
            console.log(pass.seatNo);
          }
          if (pass.infants === true) {
            element.infants = true;
          }
          if (pass.wheelchairRequired === true) {
            element.wheelchairRequired = true;
          }
        }
      });
    }

    );
    this.seatRowFive.forEach((element) => {
      this.passengers.forEach((pass) => {
        if (element.seatNo === pass.seatNo) {
          element.allocated = true;
          if (pass.checkedIn === true) {
            element.checkedIn = true;
            console.log(element.seatNo);
            console.log(pass.seatNo);
          }
          if (pass.infants === true) {
            element.infants = true;
          }
          if (pass.wheelchairRequired === true) {
            element.wheelchairRequired = true;
          }
        }
      });
    }

    );
    this.seatRowSix.forEach((element) => {
      this.passengers.forEach((pass) => {
        if (element.seatNo === pass.seatNo) {
          if (pass.checkedIn === true) {
            element.checkedIn = true;
            console.log(element.seatNo);
            console.log(pass.seatNo);
          }
          if (pass.infants === true) {
            element.infants = true;
          }
          if (pass.wheelchairRequired === true) {
            element.wheelchairRequired = true;
          }
        }
      });
    }

    );
    this.seatRowSeven.forEach((element) => {
      this.passengers.forEach((pass) => {
        if (element.seatNo === pass.seatNo) {
          if (pass.checkedIn === true) {
            element.checkedIn = true;
            console.log(element.seatNo);
            console.log(pass.seatNo);
          }
          if (pass.infants === true) {
            element.infants = true;
          }
          if (pass.wheelchairRequired === true) {
            element.wheelchairRequired = true;
          }
        }
      });
    }

    );
    this.seatRowEight.forEach((element) => {
      this.passengers.forEach((pass) => {
        if (element.seatNo === pass.seatNo) {
          if (pass.checkedIn === true) {
            element.checkedIn = true;
            console.log(element.seatNo);
            console.log(pass.seatNo);
          }
          if (pass.infants === true) {
            element.infants = true;
          }
          if (pass.wheelchairRequired === true) {
            element.wheelchairRequired = true;
          }
        }
      });
    }

    );
    this.seatRowNine.forEach((element) => {
      this.passengers.forEach((pass) => {
        if (element.seatNo === pass.seatNo) {
          if (pass.checkedIn === true) {
            element.checkedIn = true;
            console.log(element.seatNo);
            console.log(pass.seatNo);
          }
          if (pass.infants === true) {
            element.infants = true;
          }
          if (pass.wheelchairRequired === true) {
            element.wheelchairRequired = true;
          }
        }
      });
    }

    );
    this.seatRowTen.forEach((element) => {
      this.passengers.forEach((pass) => {
        if (element.seatNo === pass.seatNo) {
          if (pass.checkedIn === true) {
            element.checkedIn = true;
            console.log(element.seatNo);

          }
          if (pass.infants === true) {
            element.infants = true;
          }
          if (pass.wheelchairRequired === true) {
            element.wheelchairRequired = true;
          }
        }
      });
    }
    );
  }
}
