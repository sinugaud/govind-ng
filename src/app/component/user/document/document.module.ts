import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DocumentComponent} from "./document.component";
import {DocumentRoutingModule} from "./document-routing.module";
import {DocumentService} from "../../../service/document.service";

@NgModule({
  imports: [
    CommonModule,
    DocumentRoutingModule,
  ],
  providers: [DocumentService],
  exports: [],
  declarations: [DocumentComponent]
})
export class DocumentModule {
}
