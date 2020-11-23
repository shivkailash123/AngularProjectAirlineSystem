import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Passenger } from 'src/app/common-modules/shared/interfaces/passenger';
import { HttpApiService } from 'src/app/core/services/http-api.service';

@Component({
  selector: 'app-passenger-list',
  templateUrl: './passenger-list.component.html',
  styleUrls: ['./passenger-list.component.scss']
})
export class PassengerListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'ancillary', 'wheelChair', 'specialMeal', 'checkedIn'];
  passengerList: Passenger[] = [];
  dataSource: Passenger[];
  selection = new SelectionModel<Passenger>(false, []);
  filtersOptions = ['wheelChair', 'checkedIn', 'infants'];
  filteredDataSource: Passenger[] = [];

  constructor(private service: HttpApiService, public dialog: MatDialog, private router: Router) { }

  ngOnInit(): void {
    this.service.getPassengersByFlight().subscribe(
      (response: any) => {
        this.dataSource = response;
        this.filteredDataSource = this.dataSource;

      },
      errorResponse => { console.log(errorResponse); },
      );
  }

  applyFilter(filterValue: string): void {
    this.filteredDataSource = [];
    for (const passenger of this.dataSource) {
      if (filterValue === 'wheelChair') {
        if (passenger.wheelchairRequired === true) {
          this.filteredDataSource.push(passenger);
        }
      }
      else if (filterValue === 'checkedIn') {
        if (passenger.checkedIn === true) {
          this.filteredDataSource.push(passenger);
        }
      }
      else if (filterValue === 'infants') {
        if (passenger.infants === true) {
          this.filteredDataSource.push(passenger);
        }
      }
  }
  }

  resetFilter(): void {
    this.filteredDataSource = this.dataSource;
  }

  changeSeat(): void {
  console.log(this.selection.selected[0]);
  this.service.changeSeat(this.selection.selected[0]);
  this.router.navigate(['flights/changeseat']);
  }


}
