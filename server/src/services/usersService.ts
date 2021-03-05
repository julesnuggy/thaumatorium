import { v4 as UUID } from 'uuid';
import { User, UserRequest } from '../models/User';
import { UsersRepository } from '../repositories/usersRepository';

export class UsersService {
  private repository = new UsersRepository();

  public createUser = (params: UserRequest): Promise<void> => {
    const { username, password } = params;
    const userProperties = {
      id: UUID(),
      username,
      password
    }
    const user = new User(userProperties)

    return this.repository.createUser(user);
  }
}
