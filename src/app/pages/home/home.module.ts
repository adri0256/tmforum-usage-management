import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatRippleModule } from '@angular/material/core';
import { ContainerModule } from 'src/app/shared/components/container/container.module';
import { MatListModule } from '@angular/material/list';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatCardModule,
    MatRippleModule,
    ContainerModule,
    MatListModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
