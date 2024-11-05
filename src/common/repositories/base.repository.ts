import { FindOneOptions, Repository } from 'typeorm';

import { IBaseRepository } from '../interfaces';

export class BaseRepository<T>
  extends Repository<T>
  implements IBaseRepository<T>
{
  constructor(protected readonly repository: Repository<T>) {
    super(repository.target, repository.manager, repository.queryRunner);
  }

  async findAll(): Promise<T[]> {
    return await this.repository.find();
  }

  async findOne(options: FindOneOptions<T>): Promise<T | undefined> {
    return await this.repository.findOne(options);
  }

  async count(): Promise<number> {
    return await this.repository.count();
  }
}
