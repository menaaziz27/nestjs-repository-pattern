import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity()
export class User {
  @PrimaryKey({ type: 'uuid' })
  id: string;

  @Property()
  email: string;

  @Property()
  password: string;
}
