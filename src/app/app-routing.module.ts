import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SuccessComponent } from './success/success.component';


const routes: Routes = [
  {
    path:'',
    redirectTo: 'payment',
    pathMatch: 'full'
  },
  {
    path: 'success',
    component: SuccessComponent
  },
  {
    path: 'payment',
    loadChildren: './../app/credit-card/credit-card.module#CreditCardModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
