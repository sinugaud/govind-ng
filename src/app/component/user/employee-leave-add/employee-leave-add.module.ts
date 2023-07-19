import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EmployeeLeaveAddComponent} from "./employee-leave-add.component";
import {EmployeeLeaveAddRoutingModule} from "./employee-leave-add-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {LeaveService} from "../../../service/leave.service";

@NgModule({
  imports: [
    CommonModule,
    EmployeeLeaveAddRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [LeaveService],
  exports: [],
  declarations: [EmployeeLeaveAddComponent]
})
export class EmployeeLeaveAddModule {
}
