import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PaymentService } from '../services/payment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.scss']
})
export class CreditCardComponent implements OnInit {
  paymentForm = this.formBuilder.group({
    name: ['', [Validators.required]],
    cardNumber: ['', [Validators.required]],
    expiryDate: ['', [Validators.required]],
    cvv: ['', [Validators.required]],
    amount: ['', [Validators.required]]
  })
  constructor(
    private formBuilder: FormBuilder,
    private paymentService: PaymentService,
    private router: Router) { }

  ngOnInit() {
  }

  makePayment() {
    this.paymentService.makePayment(this.paymentForm.value);
    this.router.navigateByUrl("/success");
  }

}
