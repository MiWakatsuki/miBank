import { IsNumber, IsString } from "class-validator";

export class CreateTransactionDto {
    
    @IsNumber()
    amount: number;

    transactionType: string; // e.g., 'credit', 'debit'
    description?: string; // Optional description of the transaction
    userId: number; // Foreign key to associate with User
    cardId: number; // Foreign key to associate with Card
    transactionDate: Date; // Date of the transaction, defaults to current date if not provided
}
