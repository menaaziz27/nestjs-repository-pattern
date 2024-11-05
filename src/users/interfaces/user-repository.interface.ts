import { FindOneOptions } from 'typeorm';

import { User } from '../entities';

export interface IUserRepository {
  findAll(): Promise<User[]>;
  findOne(options: FindOneOptions<User>): Promise<User | undefined>;
  createUser(user: User): Promise<User>;
  count(): Promise<number>;
}
