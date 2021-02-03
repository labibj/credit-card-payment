import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { CreditCard } from "../models/CreditCard.model";

export const MAKE_PAYMENT = '[PAYMENT] add';

export class MakePayment implements Action {
    readonly type = MAKE_PAYMENT

    constructor(public payload: CreditCard) {}
}

export type Actions = MakePayment;