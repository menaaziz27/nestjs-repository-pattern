import { DataSource, FindOneOptions, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

import { User } from '../entities';
import { IUserRepository } from '../interfaces';

@Injectable()
export class UsersRepository
  extends Repository<User>
  implements IUserRepository
{
  constructor(private dataSource: DataSource) {
    super(User, dataSource.createEntityManager());
  }

  async findAll(): Promise<User[]> {
    return this.find();
  }

  async findOne(options: FindOneOptions<User>): Promise<User | undefined> {
    return this.findOne(options);
  }

  async createUser(user: User): Promise<User> {
    return this.save(user);
  }

  // we could put the count method implementation here or not since the repository already has a count method with the same name as the interface
  // async count(): Promise<number> {
  //   return this.count();
  // }
}
