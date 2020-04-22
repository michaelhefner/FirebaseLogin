import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SigninComponent} from './auth/signin/signin.component';
import {HomeComponent} from './home/home.component';
import {RegisterComponent} from './auth/register/register.component';


const routes: Routes = [{
  path: '',
  component: HomeComponent
}, {
  path: 'signin',
  component: SigninComponent
}, {
  path: 'register',
  component: RegisterComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
