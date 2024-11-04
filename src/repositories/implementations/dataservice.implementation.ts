import { Injectable } from '@nestjs/common';
import { EntityManager } from '@mikro-orm/sqlite';

import { Address, User } from 'src/users/entities';
import { IGenericRepository } from '../interfaces/repository.interface';
import { IDataService } from '../interfaces/dataservice.interface';

@Injectable()
export class GenericDataService implements IDataService {
  users: IGenericRepository<User>;
  addresses: IGenericRepository<Address>;

  constructor(private readonly entityManager: EntityManager) {
    this.users = this.entityManager.getRepository(User);
    this.addresses = this.entityManager.getRepository(Address);
  }
}
