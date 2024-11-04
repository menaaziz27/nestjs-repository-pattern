import { Inject, Injectable } from '@nestjs/common';

import { UsersRepository } from './repositories';

@Injectable()
export class UsersService {
  constructor(
    @Inject('UsersRepository')
    private readonly repository: UsersRepository,
  ) {}

  async findAll() {
    return this.repository.findAll();
  }
}
