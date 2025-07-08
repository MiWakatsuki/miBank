import { Injectable } from '@nestjs/common';
import { CreateCardDto } from './dto/create-card.dto';
import { UpdateCardDto } from './dto/update-card.dto';
import { Card } from './entities/card.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { StatusCards } from './enums/status-cards.enum';

@Injectable()
export class CardsService {

  constructor(
    @InjectRepository(Card)
    private cardRepository: Repository<Card>,
  ) {}

  create(createCardDto: CreateCardDto) {
    createCardDto.status = StatusCards.ACTIVE; // Set default status to ACTIVE 
    return this.cardRepository.save(createCardDto);
  }

  findAll() {
    return this.cardRepository.find();
  }

  findOne(id: number) {
    return this.cardRepository.findOneBy({ id });
  }

  update(id: number, updateCardDto: UpdateCardDto) {
    return this.cardRepository.update(id, updateCardDto);
  }

  remove(id: number) {
    return this.cardRepository.delete(id);
  }
}
