import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EmployeeLeaveComponent} from "./employee-leave.component";

const routes: Routes = [
  {
    path: '',
    component: EmployeeLeaveComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeLeaveRoutingModule {
}
