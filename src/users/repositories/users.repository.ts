import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { User } from '../entities';
import { BaseRepository } from '../../common/repositories';

@Injectable()
export class UsersRepository extends BaseRepository<User> {
  constructor(@InjectRepository(User) repository: Repository<User>) {
    super(repository);
  }

  async create(user: User): Promise<User> {
    // hash password ... etc.
    return this.repository.save(user);
  }
}
