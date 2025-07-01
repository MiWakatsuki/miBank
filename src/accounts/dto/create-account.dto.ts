import { IsBoolean, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateAccountDto {
    @IsNumber()
    accountNumber: number;
   
    @IsString()
    accountType: string;
   
    @IsOptional()
    @IsBoolean()
    isActive: boolean; 
   
    @IsNumber()
    userId: number; // Foreign key to associate with User
}
