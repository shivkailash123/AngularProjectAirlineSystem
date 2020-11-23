import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Services } from 'src/app/common-modules/shared/interfaces/services';
import { HttpApiService } from 'src/app/core/services/http-api.service';
import { SelectDialogComponent } from 'src/app/features/check-in/components/flight-list/select-dialog.component';

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.scss']
})
export class MealsComponent implements OnInit {
  displayedColumns: string[] = [ 'specialMeal', 'delete'];
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
        this.data1 = response[0].specialMeal;
        this.dataSource = this.data1;
        this.finalData = response[0];
      },
      () => {
        console.log('Error while fetching');
      },
    );
  }
  public delete(element: any): void {
    this.finalData.specialMeal = this.data1.filter(item => item !== element);
    this.dataSource = this.finalData.specialMeal;
    this.service.updateService(this.finalData).subscribe(
      (response: any) => {
      },
      () => {
        console.log('Error while fetching');
      },
    );
  }
  public add(element: string): void {
    // this.data1.push(element);
    this.finalData.specialMeal.push(element);
    this.dataSource = this.finalData.specialMeal;
    this.service.updateService(this.finalData).subscribe(
      (response: any) => {
        this.ngOnInit();
      },
      () => {
        console.log('Error while fetching');
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
