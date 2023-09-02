import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ReportComponent } from './report.component'


const routes: Routes = [
  {
    path: '',
    component: ReportComponent,
    data: {
      title: $localize`report`
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportRoutingModule {
}
