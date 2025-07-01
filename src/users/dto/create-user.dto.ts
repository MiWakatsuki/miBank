import { IsBoolean, IsDate, IsDateString, IsEmail, IsOptional, IsPhoneNumber, IsString } from "class-validator";

export class CreateUserDto {
    @IsString()
    name: string;

    @IsEmail()
    email: string;

    @IsString()
    password: string;

    @IsDateString()
    birthDate: Date; 

    @IsPhoneNumber()
    phoneNumber: string;

    @IsString()
    cpf: string;

    @IsString()
    address: string;

    @IsString()
    postalCode: string;

    @IsString()
    city: string;

    @IsString()
    state: string;

    @IsString()
    country: string;

    @IsOptional()
    @IsBoolean()
    isActive: boolean;

    @IsOptional()
    @IsDate()
    createdAT: Date;
}
