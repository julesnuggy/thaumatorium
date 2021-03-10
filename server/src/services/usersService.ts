import { v4 as UUID } from 'uuid';
import { User, UserRequest, UserResponse } from '../models/User';
import { UsersRepository } from '../repositories/usersRepository';
import { hashPassword } from '../utils/encryptionHandler';

export class UsersService {
  private repository = new UsersRepository();

  public getUsers = (): Promise<UserResponse[]> => {
    return this.repository.getUsers();
  }

  public getUserByUsername = (username: string): Promise<UserResponse> => {
    return this.repository.getUserByUsername(username);
  }

  public createUser = async (params: UserRequest): Promise<void> => {
    const { username, password } = params;
    const hashedPassword = await hashPassword(password);
    const userProperties = {
      id: UUID(),
      username,
      password: hashedPassword
    }
    const user = new User(userProperties)

    return this.repository.createUser(user);
  }
}
