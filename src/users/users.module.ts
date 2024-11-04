import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User, Address } from './entities';
import { MikroOrmModule } from '@mikro-orm/nestjs';

@Module({
  imports: [MikroOrmModule.forFeature([User, Address])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
