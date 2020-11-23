import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Flight } from 'src/app/common-modules/shared/interfaces/flight';
import { HttpApiService } from 'src/app/core/services/http-api.service';
import { SelectDialogComponent } from 'src/app/features/check-in/components/flight-list/select-dialog.component';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.scss']
})
export class AdmindashboardComponent implements OnInit {
  displayedColumns: string[] = ['id', 'scheduleDate', 'time', 'source', 'destination'];
  flightList: Flight[] = [];
  dataSource: any;
  selection = new SelectionModel<Flight>(false, []);
  selected: boolean;
  selected1: boolean;
  selected2: boolean;
  selected3: boolean;

  constructor(private service: HttpApiService, public dialog: MatDialog) { }


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
  public manageServices(): void {
    if (this.selection.selected.length === 0) {
      this.openDialog();
    }
    else {
      this.selected1 = true;
      this.service.setCurrentFlight(this.selection.selected[0].id);
    }
  }

  public manageItems(): void {
    if (this.selection.selected.length === 0) {
      this.openDialog();
    }
    else {
      this.selected2 = true;
      this.service.setCurrentFlight(this.selection.selected[0].id);
    }
  }
  public manageMeals(): void {
    if (this.selection.selected.length === 0) {
      this.openDialog();
    }
    else {
      this.selected3 = true;
      this.service.setCurrentFlight(this.selection.selected[0].id);
    }
  }
  openDialog(): void {
    this.dialog.open(SelectDialogComponent);
  }

  public backToFlight(): void {
    this.selected = false;
    this.selected1 = false;
    this.selected2 = false;
    this.selected3 = false;
  }
}
