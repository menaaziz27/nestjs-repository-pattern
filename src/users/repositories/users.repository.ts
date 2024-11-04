import { Repository } from 'typeorm';

import { User } from '../entities';
import { InjectRepository } from '@nestjs/typeorm';

interface IUserRepository {
  findAll(): Promise<User[]>;
  findById(id: string): Promise<User | undefined>;
  create(user: User): Promise<User>;
}

//  now if we wanna change the ORM we can just change the repository implementation and the service will still work because it depends on the interface
// since every orm has its own repository implementation we can just create a new repository for the new orm and implement the interface
// and then change the provider in the module to use the new repository
// since every orm has its own method names we can just change the implementation of the methods in the new repository without changing the name of the methods in the interface
// we will always have findAll(), findById(), create() methods in the interface we only need to change the implementation of these methods in the new repository
// that's why we use the interface to make the service independent of the orm
export class UsersRepository implements IUserRepository {
  constructor(
    @InjectRepository(User)
    private readonly model: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.model.find();
  }

  async findById(id: string): Promise<User | undefined> {
    return this.model.findOne({ where: { id } });
  }

  async create(user: User): Promise<User> {
    return this.model.save(user);
  }
}
