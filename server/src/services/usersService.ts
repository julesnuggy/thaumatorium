import { IUser, User } from '../models/User';
import { UsersRepository } from '../repositories/usersRepository';

export class UsersService {
  private repository = new UsersRepository();

  public createUser = (params: User): Promise<IUser> => {
    return this.repository.createUser(params);
  }
}
