import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DetailRoutingModule} from "./detail-routing.module";
import {DetailComponent} from "./detail.component";
import {LoginService} from "../../../service/login.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  imports: [
    CommonModule,
    DetailRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [LoginService],
  declarations: [DetailComponent]
})
export class DetailModule {
}
