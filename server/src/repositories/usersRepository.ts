import { UserRequest, User } from '../models/User';
import { promisePool } from '../db'

export class UsersRepository {
  public createUser = async (params: UserRequest): Promise<void> => {
    await promisePool.query(
      'INSERT INTO users (username, password) VALUES (?, ?)',
      {...params}
    );
  }
}
