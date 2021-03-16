import { v4 as UUID } from 'uuid';
import { User, UserRequest, UserResponse } from '../models/User';
import { UsersRepository } from '../repositories/usersRepository';
import { SessionRepository } from '../repositories/sessionRepository';
import { hashPassword, comparePasswords } from '../utils/encryptionHandler';

export class UsersService {
  private userRepository = new UsersRepository();
  private sessionRepository = new SessionRepository();

  public getUsers = (): Promise<UserResponse[]> => {
    return this.userRepository.getUsers();
  }

  public getUserByUsername = (username: string): Promise<UserResponse> => {
    return this.userRepository.getUser(username);
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

    return this.userRepository.createUser(user);
  }

  public authenticateUser = async (params: UserRequest): Promise<boolean> => {
    const userPassword = await this.userRepository.getUserPassword(params.username)
      .catch((err) => {
        console.error(err);
        throw new Error(err);
      });

    const isAuthenticated = comparePasswords(params.password, userPassword.password);

    if (isAuthenticated) {
      const session = {
        id: UUID(),
        userId: userPassword.id
      }
      await this.sessionRepository.createSession(session);
    }

    return isAuthenticated;
  }
}
