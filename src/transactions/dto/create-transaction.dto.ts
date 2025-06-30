import { IsDate, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateTransactionDto {
    @IsNumber()
    amount: number;

    @IsString()
    transactionType: string; // e.g., 'credit', 'debit'

    @IsOptional()
    @IsString()
    description?: string; // Optional description of the transaction

    @IsNumber()
    userId: number; // Foreign key to associate with User

    @IsNumber()
    cardId: number; // Foreign key to associate with Card

    @IsDate()
    transactionDate: Date; // Date of the transaction, defaults to current date if not provided
}
