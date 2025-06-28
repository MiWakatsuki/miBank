export class CreateCardDto {
    
    cardNumber: string;
    cardCvv: string;
    CardExpirationDate: Date;
    userId: number; // Foreign key to associate with User
    transactionId?: number; // Foreign key to associate with Transaction

}
