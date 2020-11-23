import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Services } from 'src/app/common-modules/shared/interfaces/services';
import { HttpApiService } from 'src/app/core/services/http-api.service';
import { SelectDialogComponent } from 'src/app/features/check-in/components/flight-list/select-dialog.component';

@Component({
  selector: 'app-ancillary',
  templateUrl: './ancillary.component.html',
  styleUrls: ['./ancillary.component.scss']
})
export class AncillaryComponent implements OnInit {
  displayedColumns: string[] = [ 'ancillaryServices', 'delete'];
  dataSource: string[] = [];
  selected: boolean;
  selected1: boolean;
  data1: string[];
  finalData: Services;
  constructor(private service: HttpApiService, public dialog: MatDialog) { }


  ngOnInit(): void {
    this.selected = false;
    this.service.getServices().subscribe(
      (response: any) => {
        this.data1 = response[0].ancillaryServices;
        this.dataSource = this.data1;
        this.finalData = response[0];
      },
      () => {
        console.log('Error while fetching flight list');
      },
    );
  }
  public delete(element: any): void {
    this.finalData.ancillaryServices = this.data1.filter(item => item !== element);
    this.dataSource = this.finalData.ancillaryServices;
    this.service.updateService(this.finalData).subscribe(
      (response: any) => {
      },
      () => {
        console.log('Error while fetching flight list');
      },
    );
  }
  public add(element: string): void {
    // this.data1.push(element);
    this.finalData.ancillaryServices.push(element);
    this.dataSource = this.finalData.ancillaryServices;
    this.service.updateService(this.finalData).subscribe(
      (response: any) => {
        this.ngOnInit();
      },
      () => {
        console.log('Error while fetching flight list');
      },
    );
  }

  openDialog(): void {
    this.dialog.open(SelectDialogComponent);
  }

  public backToFlight(): void {
    this.selected = false;
    this.selected1 = false;
  }
}
