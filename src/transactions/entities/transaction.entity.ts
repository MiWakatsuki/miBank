import { Card } from 'src/cards/entities/card.entity';
import { User } from 'src/users/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity ('transactions')
export class Transaction {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    amount: number;

    @Column({ type: 'timestamp' })
    transactionDate: Date;

    @Column({ length: 100 })
    description: string;

    @Column({ length: 50 })
    transactionType: string; // e.g., 'credit', 'debit'

    @ManyToOne(() => User, (user) => user.accounts)
  user: User;

    @Column()
  userId: number; 

    @ManyToOne(() => Card, (card) => card.transactions)
  card: Card;
    
    @Column()
  cardId: number;
}
