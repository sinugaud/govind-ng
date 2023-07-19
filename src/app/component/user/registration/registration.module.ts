import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RegistrationComponent} from "./registration.component";
import {RegistrationRoutingModule} from "./registration-routing.module";
import {RegisterService} from "../../../service/register.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  imports: [
    CommonModule,
    RegistrationRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [RegisterService],
  declarations: [
    RegistrationComponent,
  ]
})
export class RegistrationModuleModule {
}
