import { UserResponse, UserPasswordResponse, UserType } from '../models/User';
import { promisePool } from '../db'

export class UsersRepository {
  public getUsers = async (): Promise<UserResponse[]> => {
    const [rows] = await promisePool.query('SELECT id, username FROM users');
    return rows as UserResponse[];
  }

  public getUser = async (username: string): Promise<UserResponse> => {
    const [rows]: any = await promisePool.query('SELECT id, username FROM users WHERE username = ? LIMIT 1', [username])
    if (rows.length < 1) {
      throw new Error('User with that username was not found');
    }
    return rows[0] as UserResponse;
  }

  public getUserPassword = async (username: string): Promise<UserPasswordResponse> => {
    const [rows]: any = await promisePool.query('SELECT password FROM users WHERE username = ? LIMIT 1', [username])
    if (rows.length < 1) {
      throw new Error('Could not authenticate');
    }
    return rows[0] as UserPasswordResponse;
  }

  public createUser = async (user: UserType): Promise<void> => {
    await promisePool.query(
      'INSERT INTO users (id, username, password) VALUES (?, ?, ?)',
      [user.id, user.username, user.password]
    );
  }
}
