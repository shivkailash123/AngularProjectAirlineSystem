import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Meal } from 'src/app/common-modules/shared/interfaces/meal';
import { Passenger } from 'src/app/common-modules/shared/interfaces/passenger';
import { Seat } from 'src/app/common-modules/shared/interfaces/seat';
import { HttpApiService } from 'src/app/core/services/http-api.service';
import { SelectDialogComponent } from '../flight-list/select-dialog.component';

@Component({
  selector: 'app-inflight-detail',
  templateUrl: './inflight-detail.component.html',
  styleUrls: ['./inflight-detail.component.scss']
})
export class InflightDetailComponent implements OnInit {
  selected: boolean;
  constructor(private service: HttpApiService, public dialog: MatDialog, private formBuilder: FormBuilder, private router: Router) { }

  operations: string[] = ['Ancillary Services', 'Add Ancillary Service', 'Shop Requests'];
  passengers: Passenger[];
  currentPassenger: Passenger;
  seatPresent = false;
  displayedColumns: string[] = ['id', 'name', 'ancillary', 'seatNumber', 'passport', 'address', 'dob'];
  passengerList: Passenger[] = [];
  dataSource: MatTableDataSource<Passenger>;
  data1: Passenger[] = [];
  select1 = false;
  selection = new SelectionModel<Passenger>(false, []);
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
  seatRowOne: Meal[] = [];
  seatRowTwo: Meal[] = [];
  seatRowThree: Meal[] = [];
  seatRowFour: Meal[] = [];
  seatRowFive: Meal[] = [];
  seatRowSix: Meal[] = [];
  seatRowSeven: Meal[] = [];
  seatRowEight: Meal[] = [];
  seatRowNine: Meal[] = [];
  seatRowTen: Meal[] = [];

  async checkboxClicked(value): Promise<void> {
    this.ngOnInit();
  }

  ngOnInit(): void {
    this.service.getSeatForMeal().subscribe(
      (response1: any) => {
        console.log(response1[0]);
        this.seatDetail(response1);
      },
      () => {
        console.log('Error while fetching flight list');
      },
    );

    this.service.getPassengersByFlight().subscribe(
      (response: any) => {
        this.passengers = response;
        console.log(this.passengers);
        this.passengerByFlight();

      },

      () => {
        console.log('Error while fetching passenger list');
      },
    );
    this.selected = false;
    this.service.getPassengersByFlight().subscribe(
      (response: any) => {
        console.log(this.passengerList);
        this.data1 = response;
        this.dataSource = new MatTableDataSource(response);
      },
      errorResponse => { console.log(errorResponse); },
    );

    this.service.getPassengerById().subscribe((response: Passenger) => {
      this.passenger = response[0];
    });
  }

  public selectPassenger(): void {
    if (this.selection.selected.length === 0) {
      this.openDialog();
    }
    else {
      this.service.getPassengerById().subscribe((response: Passenger) => {
        this.passenger = response[0];
      });
      this.selected = true;
      console.log(this.selection.selected[0].id);
      this.service.setpassengerId(this.selection.selected[0].id);
    }
  }
  openDialog(): void {
    this.dialog.open(SelectDialogComponent);
  }

  public backToPassengerList(): void {
    this.selected = false;
  }

  onFormSubmit(): void {
    this.select1 = true;
  }
  seatDetail(response1): void {
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
    console.log(this.seatRowOne);
  }
  passengerByFlight(): void {
    this.seatRowOne.forEach((element) => {
      this.passengers.forEach((pass) => {
        if (element.seatNo === pass.seatNo) {
          if (pass.specialMeal !== '') {
            element.specialMeal = true;
            console.log(element.seatNo);
            console.log(pass.seatNo);
          }
        }
      });
    }

    );
    this.seatRowTwo.forEach((element) => {
      this.passengers.forEach((pass) => {
        if (element.seatNo === pass.seatNo) {
          if (pass.specialMeal !== '') {
            element.specialMeal = true;
            console.log(element.seatNo);
            console.log(pass.seatNo);
          }
        }
      });
    }

    );
    this.seatRowThree.forEach((element) => {
      this.passengers.forEach((pass) => {
        if (element.seatNo === pass.seatNo) {
          if (pass.specialMeal !== '') {
            element.specialMeal = true;
            console.log(element.seatNo);
            console.log(pass.seatNo);
          }
        }
      });
    }

    );
    this.seatRowFour.forEach((element) => {
      this.passengers.forEach((pass) => {
        if (element.seatNo === pass.seatNo) {
          if (pass.specialMeal !== '') {
            element.specialMeal = true;
            console.log(element.seatNo);
            console.log(pass.seatNo);
          }
        }
      });
    }

    );
    this.seatRowFive.forEach((element) => {
      this.passengers.forEach((pass) => {
        if (element.seatNo === pass.seatNo) {
          if (pass.specialMeal !== '') {
            element.specialMeal = true;
            console.log(element.seatNo);
            console.log(pass.seatNo);
          }
        }
      });
    }

    );
    this.seatRowSix.forEach((element) => {
      this.passengers.forEach((pass) => {
        if (element.seatNo === pass.seatNo) {
          if (pass.specialMeal !== '') {
            element.specialMeal = true;
            console.log(element.seatNo);
            console.log(pass.seatNo);
          }
        }
      });
    }

    );
    this.seatRowSeven.forEach((element) => {
      this.passengers.forEach((pass) => {
        if (element.seatNo === pass.seatNo) {
          if (pass.specialMeal !== '') {
            element.specialMeal = true;
            console.log(element.seatNo);
            console.log(pass.seatNo);
          }
        }
      });
    }

    );
    this.seatRowEight.forEach((element) => {
      this.passengers.forEach((pass) => {
        if (element.seatNo === pass.seatNo) {
          if (pass.specialMeal !== '') {
            element.specialMeal = true;
            console.log(element.seatNo);
            console.log(pass.seatNo);
          }
        }
      });
    }

    );
    this.seatRowNine.forEach((element) => {
      this.passengers.forEach((pass) => {
        if (element.seatNo === pass.seatNo) {
          if (pass.specialMeal !== '') {
            element.specialMeal = true;
            console.log(element.seatNo);
            console.log(pass.seatNo);
          }
        }
      });
    }

    );
    this.seatRowTen.forEach((element) => {
      this.passengers.forEach((pass) => {
        if (element.seatNo === pass.seatNo) {
          if (pass.specialMeal !== '') {
            element.specialMeal = true;
            console.log(element.seatNo);

          }
        }
      });
    }
    );
  }
}
