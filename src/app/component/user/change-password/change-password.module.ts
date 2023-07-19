import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ChangePasswordComponent} from "./change-password.component";
import {ChangePasswordRoutingModule} from "./change-password-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LoginService} from "../../../service/login.service";
import {HttpClientModule} from "@angular/common/http";
import {HeaderModule} from "../header/header.module";

@NgModule({
  imports: [
    CommonModule,
    ChangePasswordRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HeaderModule
  ],
  providers: [LoginService],
  declarations: [
    ChangePasswordComponent,
  ]
})
export class ChangePasswordModule {
}
