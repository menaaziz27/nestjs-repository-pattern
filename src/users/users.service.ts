import { Inject, Injectable } from '@nestjs/common';

import { FindOneOptions } from 'typeorm';
import { User } from './entities';
import { UsersRepository } from './repositories';
// import { IUserRepository } from './interfaces';
// import { IBaseRepository } from '../common/interfaces';

@Injectable()
export class UsersService {
  constructor(
    @Inject('UsersRepository')
    private readonly repository: UsersRepository, // here we are using the interface type because the main goal of the repository pattern is to make the service independent of the orm
    // so we can change the orm without changing anything in the service
  ) {}

  // the service layer should have only access to the repository layer's interfaces and not the concrete implementation
  // we should not call the repository directly from the service layer .. if we do so we are breaking the repository pattern

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
