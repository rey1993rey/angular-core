import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkshiftComponent } from './workshift.component';
import { WorkshiftRoutingModule } from './workshift-routing.module';



@NgModule({
  declarations: [
    WorkshiftComponent
  ],
  imports: [
    CommonModule,
    WorkshiftRoutingModule
  ]
})
export class WorkshiftModule { }
