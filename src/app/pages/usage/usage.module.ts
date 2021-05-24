import { UsageCharacteristicModule } from './../usage-characteristic/usage-characteristic.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsageComponent } from './usage.component';
import { ContainerModule } from '../../shared/components/container/container.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormTestRoutingModule } from './usage-routing.module';
import { MatSelectModule } from '@angular/material/select';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatNativeDateModule } from '@angular/material/core';
import { RatedProductUsageModule } from '../rated-product-usage/rated-product-usage.module';
import { RelatedPartyModule } from '../related-party/related-party.module';
import { UsageSpecificationModule } from '../usage-specification/usage-specification.module';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [UsageComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    ContainerModule,
    MatListModule,
    MatRadioModule,
    MatDatepickerModule,
    FormTestRoutingModule,
    MatSelectModule,
    MatExpansionModule,
    MatNativeDateModule,
    RatedProductUsageModule,
    RelatedPartyModule,
    UsageCharacteristicModule,
    UsageSpecificationModule,
    MatDialogModule,
  ],
  exports: [UsageComponent],
})
export class UsageModule {}
