import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkloggerComponent } from './worklogger.component';
import { WorkloggerRoutingModule } from './worklogger-routing.module';



@NgModule({
  declarations: [
    WorkloggerComponent
  ],
  imports: [
    CommonModule,
    WorkloggerRoutingModule
  ]
})
export class WorkloggerModule { }
