import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AccessGuardForRole} from "../../accessguard/AccessGuardForRole";
import {DocumentAddComponent} from "./document-add.component";

const routes: Routes = [
  {
    path: '',
    component: DocumentAddComponent, canActivate: [AccessGuardForRole]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentAddRoutingModule {

}
