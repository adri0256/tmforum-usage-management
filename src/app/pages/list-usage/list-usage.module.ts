import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUsageComponent } from './list-usage.component';
import { MatTableModule } from '@angular/material/table';
import { ContainerModule } from 'src/app/shared/components/container/container.module';
import { ListUsageRoutingModule } from './list-usage-routing.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    ListUsageComponent
  ],
  imports: [
    CommonModule,
    ListUsageRoutingModule,
    MatTableModule,
    ContainerModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatDialogModule,
  ],
  exports: [ListUsageComponent]
})
export class ListUsageModule { }
