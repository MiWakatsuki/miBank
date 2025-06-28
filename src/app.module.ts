import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module'; 
import { User } from './users/entities/user.entity';
import { AccountsModule } from './accounts/accounts.module';
import { Account } from './accounts/entities/account.entity';
import { Card } from './cards/entities/card.entity';
import { Transaction } from './transactions/entities/transaction.entity';
import { CardsModule } from './cards/cards.module';
import { TransactionsModule } from './transactions/transactions.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',   
      password: 'luna27',     
      database: 'crud_nest',
      entities: [User, Account, Card, Transaction],   // forma direta (ou: [__dirname + '/**/*.entity{.ts,.js}'])
      synchronize: true,
    }),
    UsersModule,
    AccountsModule,
    CardsModule,
    TransactionsModule,
  ],
})
export class AppModule {}