import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EmployeeLeaveAddComponent} from "./employee-leave-add.component";

const routes: Routes = [
  {
    path: '',
    component: EmployeeLeaveAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeLeaveAddRoutingModule {
}
