import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {SignupComponent} from './new-users/signup/signup.component';


const routes: Routes = [

  {
    path: '',
    redirectTo: '/signup',
    pathMatch: 'full'
  },
  {
    path: 'signup',
    loadChildren  : './new-users/users.module#UsersModule'
  },
//    {
//      path: '**', component: PageNotFoundComponent
//    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
