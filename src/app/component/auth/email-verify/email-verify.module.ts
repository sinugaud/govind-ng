import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RegisterService} from "../../../service/register.service";
import {HttpClientModule} from "@angular/common/http";
import {EmailVerifyComponent} from "./email-verify.component";
import {EmailVerifyRoutingModule} from "./email-verify-routing.module";

@NgModule({
  imports: [
    CommonModule,
    EmailVerifyRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [RegisterService],
  declarations: [
    EmailVerifyComponent,
  ]
})
export class EmailVerifyModule {
}
