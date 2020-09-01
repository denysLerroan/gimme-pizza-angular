import { AuthenticationComponent } from './authentication/authentication.component';
import { SgpComponent } from './sgp/sgp.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'authentication', component: AuthenticationComponent},
  { path: 'sistema-de-gerenciamento-de-pedidos', component: SgpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
