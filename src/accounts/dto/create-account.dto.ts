export class CreateAccountDto {
   
    accountnumber: number;
   
    accountType: string;
   
    isActive?: boolean; // Optional, defaults to true if not provided
   
    userId: number; // Foreign key to associate with User
}
