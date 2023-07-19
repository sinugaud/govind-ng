import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {EmployeeLeaveComponent} from "../employee-leave/employee-leave.component";
import {DocumentComponent} from "./document.component";
import {AccessGuardForRole} from "../../accessguard/AccessGuardForRole";

const routes: Routes = [
  {
    path: '',
    component: DocumentComponent,canActivate: [AccessGuardForRole]
  }
];
@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class DocumentRoutingModule{

}
