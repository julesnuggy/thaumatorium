import { UserResponse, UserType } from "../models/User";
import { promisePool } from '../db'

export class UsersRepository {
  public getUsers = async (): Promise<UserResponse[]> => {
    const [rows] = await promisePool.query('SELECT * FROM users');
    return rows as UserResponse[];
  }

  public createUser = async (user: UserType): Promise<void> => {
    await promisePool.query(
      'INSERT INTO users (id, username, password) VALUES (?, ?, ?)',
      [user.id, user.username, user.password]
    );
  }
}
