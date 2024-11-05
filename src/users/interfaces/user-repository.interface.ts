import { IBaseRepository } from 'src/common/interfaces';
import { User } from '../entities';

export interface IUserRepository extends IBaseRepository<User> {
  create(user: User): Promise<User>;
}
