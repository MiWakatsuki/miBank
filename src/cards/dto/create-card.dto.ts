import { IsDate, IsNumber, IsString } from "class-validator";

export class CreateCardDto {
    @IsString()
    cardNumber: string;

    @IsString()
    cardCvv: string;

    @IsDate()
    CardExpirationDate: Date;

    @IsNumber()
    userId: number; // Foreign key to associate with User

    @IsNumber()
    transactionId?: number; // Foreign key to associate with Transaction

}
