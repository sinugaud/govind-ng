import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HeaderComponent} from "./header.component";
import {HeaderRoutingModule} from "./header-routing.module";

@NgModule({
  imports: [
    CommonModule,
    HeaderRoutingModule,
    FormsModule
  ],
  providers: [],
  exports: [
    HeaderComponent
  ],
  declarations: [HeaderComponent]
})
export class HeaderModule {
}
