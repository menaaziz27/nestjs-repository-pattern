import { IGenericRepository } from '../interfaces/repository.interface';

export class GenericRepository<
  T extends object,
> extends IGenericRepository<T> {}
