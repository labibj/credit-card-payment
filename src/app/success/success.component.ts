import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { CreditCard } from '../models/CreditCard.model';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss']
})
export class SuccessComponent implements OnInit {
  paymentDetails: CreditCard;

  constructor(private store: Store<AppState>) {
    this.store.select('payment').subscribe(res => 
      this.paymentDetails = res
    )
  }

  ngOnInit() {
  }

}
