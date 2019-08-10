import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SignupComponent} from './signup/signup.component';
import {FixturesComponent} from './fixtures/fixtures.component';


const routes: Routes = [{path: '', component: SignupComponent},
  {path: 'fixtures', component: FixturesComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
