import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {LoginService} from "../../../service/login.service";
import {HttpClientModule} from "@angular/common/http";
import {ListComponent} from "./list.component";
import {ListRoutingModule} from "./list-routing.module";

@NgModule({
  imports: [
    CommonModule,
    ListRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [LoginService],
  exports: [],
  declarations: [ListComponent]
})
export class ListModule {
}
