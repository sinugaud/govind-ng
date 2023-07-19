import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EmployeeLeaveComponent} from "./employee-leave.component";
import {EmployeeLeaveRoutingModule} from "./employee-leave-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {LeaveService} from "../../../service/leave.service";

@NgModule({
  imports: [
    CommonModule,
    EmployeeLeaveRoutingModule,
    HttpClientModule
  ],
  providers: [LeaveService],
  exports: [],
  declarations: [EmployeeLeaveComponent]
})
export class EmployeeLeaveModule {
}
