import { User } from 'src/users/entities';
import { IGenericRepository } from './repository.interface';

export abstract class IDataService {
  users: IGenericRepository<User>;
}
