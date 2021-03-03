import { UserRequest } from '../models/User';
import { UsersRepository } from '../repositories/usersRepository';

export class UsersService {
  private repository = new UsersRepository();

  public createUser = (params: UserRequest): Promise<void> => {
    return this.repository.createUser(params);
  }
}
