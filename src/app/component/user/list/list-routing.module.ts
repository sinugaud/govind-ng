import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListComponent} from "./list.component";
import {AccessGuardForRole} from "../../accessguard/AccessGuardForRole";

const routes: Routes = [
  {
    path: '',
    component: ListComponent, canActivate: [AccessGuardForRole]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListRoutingModule {
}
