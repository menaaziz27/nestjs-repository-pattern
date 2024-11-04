import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from './entities';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersRepository } from './repositories';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [
    UsersService,
    {
      provide: 'UsersRepository',
      useClass: UsersRepository,
    },
  ],
})
export class UsersModule {}
