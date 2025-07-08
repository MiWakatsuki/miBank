import { Transaction } from 'src/transactions/entities/transaction.entity';
import { User } from 'src/users/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn } from 'typeorm';


@Entity ()
export class Card{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true })
    cardNumber: string;

    @Column()
    cardCvv: string;

    @Column({ type: 'timestamp' })
    cardExpirationDate: Date;

    @Column({ type: 'timestamp', default: () => 'current_timestamp()' })
    createdAt: Date;

    @Column({ default: true })
    isActive: boolean;

    @Column()
    status: string;

    @ManyToOne(() => User, (user) => user.cards)
    user: User;

    @Column()
    userId: number;  
  
    @OneToMany(() => Transaction, (transaction) => transaction.card)
    transactions: Transaction[];
}
