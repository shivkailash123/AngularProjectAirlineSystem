import { NgModule } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';


const material = [
  MatInputModule,
  MatTableModule,
  MatMenuModule,
  MatPaginatorModule,
  MatRadioModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatBadgeModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatSelectModule,
  MatCardModule,
  MatDialogModule,
  MatInputModule,
  MatTableModule,
  MatMenuModule,
  MatPaginatorModule,
  MatExpansionModule,
  MatSelectModule,
  MatFormFieldModule
];

@NgModule({
  imports: [material],
  exports: [material]
})
export class MaterialModule {}
