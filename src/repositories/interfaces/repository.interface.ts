import { EntityRepository } from '@mikro-orm/core';

export abstract class IGenericRepository<
  T extends object,
> extends EntityRepository<T> {}
