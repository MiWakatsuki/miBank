import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module'; // ✅ Este import funciona se a exportação for correta
import { User } from './users/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',   // 👈 ajuste com seu usuário do PostgreSQL
      password: 'luna27',     // 👈 ajuste com sua senha
      database: 'crud_nest',
      entities: [User],          // forma direta (ou: [__dirname + '/**/*.entity{.ts,.js}'])
      synchronize: true,
    }),
    UsersModule,
  ],
})
export class AppModule {}