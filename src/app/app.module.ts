import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NewUsersComponent } from './new-users/new-users.component';
import {UsersModule} from './new-users/users.module';
import {CoreModule} from './core/core.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {HttpClientModule} from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import Swal from 'sweetalert2';
import { ModalModule } from 'ngx-bootstrap/modal';
import { Ng5SliderModule } from 'ng5-slider';



@NgModule({
  declarations: [
    AppComponent,
    NewUsersComponent,
    PageNotFoundComponent
  ],
  imports: [
    ModalModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    UsersModule,
    CoreModule,
    HttpClientModule,
    NgxPaginationModule,
    Ng5SliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
