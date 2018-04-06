import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCardModule, MatChipsModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatSidenavModule, MatSnackBarModule,
  MatTabsModule,
  MatToolbarModule
} from '@angular/material';


@NgModule({
  imports: [
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    MatExpansionModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatChipsModule
  ],
  exports: [
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    MatExpansionModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatChipsModule

  ]
})
export class MaterialModule { }
