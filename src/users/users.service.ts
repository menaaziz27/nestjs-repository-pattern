import { Inject, Injectable } from '@nestjs/common';

import { FindOneOptions } from 'typeorm';
import { User } from './entities';
import { IUserRepository } from './interfaces';

@Injectable()
export class UsersService {
  constructor(
    @Inject('UsersRepository')
    private readonly repository: IUserRepository,
  ) {}

  async create(user: User) {
    return this.repository.create(user);
  }

  async findAll() {
    return this.repository.findAll();
  }

  async findOne(options: FindOneOptions<User>): Promise<User | undefined> {
    return this.repository.findOne(options);
  }

  async count() {
    return { count: await this.repository.count() };
  }
}
