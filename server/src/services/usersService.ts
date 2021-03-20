import { v4 as UUID } from 'uuid';
import { User, UserAuthenticatedResponse, UserRequest, UserResponse } from '../models/User';
import { Session } from '../models/Session';
import { UsersRepository } from '../repositories/usersRepository';
import { SessionRepository } from '../repositories/sessionRepository';
import { hashPassword, comparePasswords } from '../utils/encryptionHandler';

export class UsersService {
  private userRepository = new UsersRepository();
  private sessionRepository = new SessionRepository();

  public getUsers = (): Promise<UserResponse[]> => {
    return this.userRepository.getUsers();
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

  public authenticateUser = async (params: UserRequest): Promise<UserAuthenticatedResponse> => {
    const userPassword = await this.userRepository.getUserPassword(params.username)
      .catch((err) => {
        console.error(err);
        throw new Error(err);
      });

    const isAuthenticated = await comparePasswords(params.password, userPassword.password);

    if (isAuthenticated) {
      const existingSession = await this.sessionRepository.getSession(userPassword.id);

      if (existingSession) {
        return {
          isAuthenticated,
          sessionId: existingSession.id
        };
      } else {
        const sessionId = UUID();
        const session = {
          id: sessionId,
          userId: userPassword.id
        };
        await this.sessionRepository.createSession(session)
          .catch((err) => {
            console.error(err);
            throw new Error(err);
          });

        return {
          isAuthenticated,
          sessionId
        };
      }
    }

    return { isAuthenticated: false }
  }

  public verifySession = async (sessionId: string): Promise<UserResponse> => {
    const session = await this.sessionRepository.verifySession(sessionId);
    if (session) {
      console.log('session', session)
      return this.userRepository.getUserById(session.userId);
    }
    throw new Error ('No session found');
  }

  public logout = async (sessionId: string): Promise<void> => {
    return this.sessionRepository.deleteSession(sessionId);
  }
}
