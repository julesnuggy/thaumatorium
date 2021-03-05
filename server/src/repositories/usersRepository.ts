import { UserType } from '../models/User';
import { promisePool } from '../db'

export class UsersRepository {
  public createUser = async (user: UserType): Promise<void> => {
    await promisePool.query(
      'INSERT INTO users (id, username, password) VALUES (?, ?, ?)',
      [user.id, user.username, user.password]
    );
  }
}
