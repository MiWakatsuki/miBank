import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { Account } from './entities/account.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AccountsService {
  constructor(
      @InjectRepository(Account)
      private accountRepository: Repository<Account>,
    ) {}

  create(createAccountDto: CreateAccountDto) {
    return this.accountRepository.save(createAccountDto);
  }

  findAll() {
    return this.accountRepository.find();
  }

  async findOne(id: number) {
    const account = await this.accountRepository.findOneBy({ id });

    if (!account) {
      throw new NotFoundException(`Account with ID ${id} not found`);
    }

    return this.accountRepository.findOneBy({ id });
  }

  async update(id: number, updateAccountDto: UpdateAccountDto) {
    const account = await this.accountRepository.findOneBy({ id });

    if (!account) {
      throw new NotFoundException(`Account with ID ${id} not found`);
    }

    return this.accountRepository.update(id, updateAccountDto);
  }

  async remove(id: number) {
    const account = await this.accountRepository.findOneBy({ id });

    if (!account) {
      throw new NotFoundException(`Account with ID ${id} not found`);
    }

    return this.accountRepository.delete(id);
  }
}
