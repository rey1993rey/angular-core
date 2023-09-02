import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WorkloggerComponent } from './worklogger.component'


const routes: Routes = [
  {
    path: '',
    component: WorkloggerComponent,
    data: {
      title: $localize`worklogger`
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkloggerRoutingModule {
}
