import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LoginService} from "../../../service/login.service";
import {HttpClientModule} from "@angular/common/http";
import {UserFromListComponent} from "./user-from-list.component";
import {UserFromListRoutingModule} from "./user-from-list-routing.module";

@NgModule({
  imports: [
    CommonModule,
    UserFromListRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [LoginService],
  declarations: [UserFromListComponent]
})
export class UserFromListModule {
}
