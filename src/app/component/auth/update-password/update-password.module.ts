import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {LoginService} from "../../../service/login.service";
import {UpdatePasswordComponent} from "./update-password.component";
import {UpdatePasswordRoutingModule} from "./update-password-routing.module";

@NgModule({
  imports: [
    CommonModule,
    UpdatePasswordRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [LoginService],
  declarations: [
    UpdatePasswordComponent,
  ]
})
export class UpdatePasswordModule {
}
