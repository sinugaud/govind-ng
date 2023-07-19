import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserFromListComponent} from "./user-from-list.component";

const routes: Routes = [
  {
    path: '',
    component: UserFromListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserFromListRoutingModule {
}
