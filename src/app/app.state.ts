import { CreditCard } from "./models/CreditCard.model";

export interface AppState {
    readonly payment: CreditCard;
}