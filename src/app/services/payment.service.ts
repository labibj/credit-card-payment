import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { CreditCard } from '../models/CreditCard.model';
import * as PaymentActions from './../actions/payment.actions';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private store: Store<AppState>, private http: HttpClient) { }

  makePayment(data: CreditCard){
    this.store.dispatch(new PaymentActions.MakePayment(data))
    return true;

    //Post call for payment
    // const url: string = '';
    // this.http.post(url, data)
    // .pipe(
    //   map(res => {
    //     return res;
    //   })
    // )
  }

}
