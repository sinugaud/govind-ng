import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {ForgetPasswordComponent} from "./forget-password.component";
import {ForgetPasswordRoutingModule} from "./forget-password-routing.module";
import {LoginService} from "../../../service/login.service";

@NgModule({
  imports: [
    CommonModule,
    ForgetPasswordRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [LoginService],
  declarations: [
    ForgetPasswordComponent,
  ]
})
export class ForgetPasswordModule {
}
