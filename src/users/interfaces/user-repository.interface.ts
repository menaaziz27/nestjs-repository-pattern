import { User } from '../entities';

export interface IUserRepository {
  createUser(user: User): Promise<User>;
}
