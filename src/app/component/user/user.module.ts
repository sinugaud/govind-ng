import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {UserRoutingModule} from "./user-routing.module";
import {UserComponent} from "./user.component";
import {HeaderModule} from "./header/header.module";

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    HeaderModule,
  ],
  providers: [],
  declarations: [UserComponent]
})
export class UserModule {
}
