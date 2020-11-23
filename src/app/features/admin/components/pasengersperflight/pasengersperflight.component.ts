import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Passenger } from 'src/app/common-modules/shared/interfaces/passenger';
import { HttpApiService } from 'src/app/core/services/http-api.service';
import { SelectDialogComponent } from 'src/app/features/check-in/components/flight-list/select-dialog.component';
import { Router } from '@angular/router';
interface Record {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-pasengersperflight',
  templateUrl: './pasengersperflight.component.html',
  styleUrls: ['./pasengersperflight.component.scss']
})
export class PasengersperflightComponent implements OnInit {
  selected: boolean;
  selected1 =  false;
  records: Record[] = [
    {value: 'all', viewValue: 'No Filter'},
    {value: 'passport', viewValue: 'Passport'},
    {value: 'address', viewValue: 'Address'},
    {value: 'dob', viewValue: 'Date Of Birth'}
  ];
  displayedColumns: string[] = ['id', 'name', 'ancillary', 'seatNumber', 'passport', 'address', 'dob'];
  passengerList: Passenger[] = [];
  dataSource: MatTableDataSource<Passenger>;
  data1: Passenger[] = [];
  selection = new SelectionModel<Passenger>(false, []);

  constructor(private service: HttpApiService, public dialog: MatDialog, private router: Router) { }
  ngOnInit(): void {
    this.selected = false;
    this.selected1 = false;
    this.service.getPassengersByFlight().subscribe(
      (response: any) => {
        console.log(this.passengerList);
        this.data1 = response;
        this.dataSource = new MatTableDataSource(response);
      },
      errorResponse => { console.log(errorResponse); },
    );
  }

  onFilterChange(ob): void {
    if (ob.value === 'passport'){
      this.dataSource = new MatTableDataSource(this.data1.filter(
        record => record.passport === ''));
    }
    if (ob.value === 'address'){
      this.dataSource = new MatTableDataSource(this.data1.filter(
        record => record.address === ''));
    }
    if (ob.value === 'dob'){
      this.dataSource = new MatTableDataSource(this.data1.filter(
        record => record.dob === ''));
    }
    if (ob.value === 'all'){
      this.dataSource = new MatTableDataSource(this.data1);
    }
  }

  public selectPassenger(): void {
    if (this.selection.selected.length === 0) {
      this.openDialog();
    }
    else {
      this.selected = true;
      console.log(this.selection.selected[0].id);
      this.service.setpassengerId(this.selection.selected[0].id);
    }
  }
  public addPassenger(): void {
    this.selected1 = true;
  }

  openDialog(): void {
    this.dialog.open(SelectDialogComponent);
  }

  public backToPassengerList(): void {
    this.selected = false;
    this.selected1 = false;
  }
}
