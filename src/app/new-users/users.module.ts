import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';


import { UsersRoutingModule } from './users-routing.module';
import { SignupComponent } from './signup/signup.component';
import { FixturesComponent } from './fixtures/fixtures.component';
import {CoreModule} from '../core/core.module';
import {ReactiveFormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import {ModalModule} from 'ngx-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import { Ng5SliderModule } from 'ng5-slider';





@NgModule({
  declarations: [SignupComponent, FixturesComponent],
  imports: [
    ModalModule.forRoot(),
    CommonModule,
    UsersRoutingModule,
    CoreModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    HttpClientModule,
    Ng5SliderModule,
  ],
  exports: [SignupComponent]
})
export class UsersModule { }
