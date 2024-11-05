import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { UsersRepository } from './repositories';
import { IUserRepository } from './interfaces';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersRepository)
    private readonly repository: IUserRepository, // here we are using the interface type because the main goal of the repository pattern is to make the service independent of the orm
    // so we can change the orm without changing anything in the service
  ) {}

  async findAll() {
    return this.repository.findAll();
  }

  async count() {
    return { count: await this.repository.count() };
  }
}
