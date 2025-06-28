import { Injectable } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { Transaction } from './entities/transaction.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TransactionsService {
  constructor(
    @InjectRepository(Transaction)
    private transactionRepository: Repository<Transaction>, // CORREÇÃO AQUI
  ) {}

  create(createTransactionDto: CreateTransactionDto) {
    return this.transactionRepository.save(createTransactionDto);
  }

  findAll() {
    return this.transactionRepository.find();
  }

  findOne(id: number) {
    return this.transactionRepository.findOneBy({ id });
  }

  update(id: number, updateTransactionDto: UpdateTransactionDto) {
    return this.transactionRepository.update(id, updateTransactionDto);
  }

  remove(id: number) {
    return this.transactionRepository.delete(id);
  }
}
