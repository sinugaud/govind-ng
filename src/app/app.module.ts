import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ToastrModule} from "ngx-toastr";
import {LoginService} from "./service/login.service";
import {HttpClientModule} from "@angular/common/http";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { UserFromListComponent } from './component/user/user-from-list/user-from-list.component';
import { DocumentComponent } from './component/user/document/document.component';
import { DocumentAddComponent } from './component/user/document-add/document-add.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    NgbModule
  ],
  providers: [LoginService],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {


}
