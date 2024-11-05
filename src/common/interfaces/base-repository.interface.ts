import { FindOneOptions } from 'typeorm';

export interface IBaseRepository<T> {
  findAll(): Promise<T[]>;
  findOne(options: FindOneOptions<T>): Promise<T | undefined>;
  count(): Promise<number>;
}
