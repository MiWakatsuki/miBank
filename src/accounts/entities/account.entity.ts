import { User } from 'src/users/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class Account {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    accountNumber: number;

    @Column({ length: 100 })
    accountType: string;

    @Column({ default: true })
    isActive: boolean;

    @ManyToOne(() => User, (user) => user.accounts)
  user: User;

    @Column()
  userId: number;

}
