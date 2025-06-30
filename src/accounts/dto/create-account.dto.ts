import { IsBoolean, IsNumber, IsString } from "class-validator";

export class CreateAccountDto {
    @IsNumber()
    accountnumber: number;
   
    @IsString()
    accountType: string;
   
    @IsBoolean()
    isActive: boolean; 
   
    @IsNumber()
    userId: number; // Foreign key to associate with User
}
