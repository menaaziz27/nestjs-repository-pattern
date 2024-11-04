import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity()
export class Address {
  @PrimaryKey({ type: 'uuid' })
  id: string;

  @Property()
  street: string;

  @Property()
  country: string;
}
