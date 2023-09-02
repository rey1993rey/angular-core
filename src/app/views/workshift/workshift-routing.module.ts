import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WorkshiftComponent } from './workshift.component'


const routes: Routes = [
  {
    path: '',
    component: WorkshiftComponent,
    data: {
      title: $localize`workshift`
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkshiftRoutingModule {
}
