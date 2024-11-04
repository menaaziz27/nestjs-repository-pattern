import { Injectable, OnApplicationBootstrap } from '@nestjs/common';

import { User } from 'src/users/entities';
import { IGenericRepository } from '../interfaces/repository.interface';
import { IDataService } from '../interfaces/dataservice.interface';
import { InjectEntityManager, InjectRepository } from '@nestjs/typeorm';
import { GenericRepository } from './repository.implementation';
import { EntityManager } from 'typeorm';

@Injectable()
export class GenericDataService
  implements IDataService, OnApplicationBootstrap
{
  users: IGenericRepository<User>;

  constructor(
    @InjectEntityManager() private readonly entityManager: EntityManager,
    @InjectRepository(User)
    private readonly userRepository: IGenericRepository<User>,
  ) {}

  onApplicationBootstrap() {
    this.users = new GenericRepository<User>(
      User,
      this.entityManager,
      this.userRepository.queryRunner,
    );
  }
}
