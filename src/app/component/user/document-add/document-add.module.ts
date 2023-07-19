import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DocumentAddRoutingModule} from "./document-add-routing.module";
import {DocumentAddComponent} from "./document-add.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {DocumentService} from "../../../service/document.service";

@NgModule({
  imports: [
    CommonModule,
    DocumentAddRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [DocumentService],
  exports: [],
  declarations: [DocumentAddComponent]
})
export class DocumentAddModule {

}
