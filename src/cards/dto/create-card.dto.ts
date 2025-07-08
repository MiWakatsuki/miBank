import { Type } from "class-transformer";
import { IsDate, IsNumber, IsString } from "class-validator";

export class CreateCardDto {
    @IsString()
    cardNumber: string;

    @IsString()
    cardCvv: string;

    @Type(() => Date)
    @IsDate()
    cardExpirationDate: Date;

    @IsNumber()
    userId: number; // Foreign key to associate with User

    status?: string; // Status of the card, e.g., 'active', 'inactive'

}
