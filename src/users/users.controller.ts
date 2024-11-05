import { Body, Controller, Get, Param, Post } from '@nestjs/common';

import { UsersService } from './users.service';
import { User } from './entities';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() user: User) {
    return await this.usersService.create(user);
  }

  @Get()
  async findAll() {
    return await this.usersService.findAll();
  }

  @Get('count')
  async count() {
    return await this.usersService.count();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.usersService.findOne({ where: { id } });
  }
}
