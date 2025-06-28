import { Account } from 'src/accounts/entities/account.entity';
import { Card } from 'src/cards/entities/card.entity';
import { Transaction } from 'src/transactions/entities/transaction.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity ()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100 })
    name: string;

    @Column({ length: 100, unique: true })
    email: string;

    @Column(
        { length: 100, select: false } // Password should not be selected by default
    )
    password: string;

    @Column({ type: 'timestamp'})
    birthDate: Date;

    @Column({ length: 15, unique: true })
    phoneNumber: string;

    @Column({ length: 100, unique: true })
    cpf: string;

    @Column({ length: 100})
    address: string;

    @Column({ length: 100})
    postalCode: string;

    @Column({ length: 100})
    city: string;

    @Column({ length: 100})
    state: string;

    @Column({ length: 100})
    country: string;

    @Column({ default: true })
    isActive: boolean;

    @Column({ type: 'timestamp', default: () => 'current_timestamp()' })
    createdAT: Date;

    @OneToMany(() => Account, (account) => account.user)
    accounts: Account[];

    @OneToMany(() => Card, (card) => card.user)
    cards: Card[];

    @OneToMany(() => Transaction, (transaction) => transaction.user)
    transactions: Transaction[];

}

