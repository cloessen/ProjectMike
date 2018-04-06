import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../shared/material/material.module';
import { FormsModule } from '@angular/forms';
import { AdminOverviewComponent } from './overview/admin-overview.component';
import { AdminPostComponent } from './post/admin-post.component';
import { AdminTerminComponent } from './termin/admin-termin.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    FormsModule
  ],
  declarations: [AdminOverviewComponent, AdminPostComponent, AdminTerminComponent]
})
export class AdminModule { }
