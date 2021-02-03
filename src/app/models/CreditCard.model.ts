export interface CreditCard {
    name: string,
    cardNumber: string,
    expiryDate: string,
    cvv?: string,
    amount: number
}