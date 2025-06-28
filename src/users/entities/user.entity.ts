import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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

    @Column({ default: true })
    isActive: boolean;

    @Column({ type: 'timestamp', default: () => 'current_timestamp()' })
    createdAT: Date;

}