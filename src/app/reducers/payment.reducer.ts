import { Action } from '@ngrx/store';
import { CreditCard } from "../models/CreditCard.model";
import * as PaymentActions from '../actions/payment.actions';

export function reducer(state: CreditCard, action: PaymentActions.Actions) {
    switch(action.type) {
        case PaymentActions.MAKE_PAYMENT:
            return action.payload;
        default:
            return state;
    }
}