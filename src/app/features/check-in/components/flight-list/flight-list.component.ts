import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Flight } from 'src/app/common-modules/shared/interfaces/flight';
import { HttpApiService } from 'src/app/core/services/http-api.service';
import { SelectDialogComponent } from './select-dialog.component';

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.scss']
})
export class FlightListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'scheduleDate', 'time', 'source', 'destination'];
  flightList: Flight[] = [];
  dataSource: any;
  selection = new SelectionModel<Flight>(false, []);
  selected = false;
  selected1 = false;
  component: any;


  constructor(private service: HttpApiService, public dialog: MatDialog, private router: Router) { }
  ngOnInit(): void {
    this.selected = false;
    this.service.getFlights().subscribe(
      (response: any) => {
        this.flightList = response;
        console.log(this.flightList);
        this.dataSource = this.flightList;
        console.log(this.selection.selected);

      },
      () => {
        console.log('Error while fetching flight list');
      },
    );
  }

  public selectFlight(): void {
    if (this.selection.selected.length === 0) {
      this.openDialog();
    }
    else {
      this.selected = true;
      this.service.setCurrentFlight(this.selection.selected[0].id);
    }
  }
  public selectCheckIn(): void {
    if (this.selection.selected.length === 0) {
      this.openDialog();
    }
    else {
      this.selected1 = true;
      this.service.setCurrentFlight(this.selection.selected[0].id);
    }
  }

  openDialog(): void {
    this.dialog.open(SelectDialogComponent);
  }

  public backToFlight(): void {
    this.selected = false;
  }
}
