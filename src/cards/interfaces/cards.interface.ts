export interface ICard {
  id: number;
  cardNumber: string;
  cardCvv: string;
  cardExpirationDate: Date;
  createdAt: Date;
  isActive: boolean;

  getMilena(): string;
}
