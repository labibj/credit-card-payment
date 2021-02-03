import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditCardComponent } from './credit-card.component';
import { RouterModule } from '@angular/router';
import { CreditCardRoutingModule } from './credit-card-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CardNumberMaskDirective } from '../directives/card-number-mask.directive';


@NgModule({
  declarations: [CreditCardComponent, CardNumberMaskDirective],
  imports: [
    CommonModule,
    CreditCardRoutingModule,
    ReactiveFormsModule
  ]
})
export class CreditCardModule { }
