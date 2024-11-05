import { FindOneOptions, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { User } from '../entities';
import { BaseRepository } from '../../common/repositories';
import { IUserRepository } from '../interfaces';

@Injectable()
export class UsersRepository
  extends BaseRepository<User>
  implements IUserRepository
{
  constructor(@InjectRepository(User) repository: Repository<User>) {
    super(repository);
  }

  async createUser(user: User): Promise<User> {
    return await this.repository.save(user);
  }
}
