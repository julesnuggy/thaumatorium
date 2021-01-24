import { IUser, User } from '../models/User';

export class UsersRepository {
  public createUser = async (params: User): Promise<IUser> => {
    return User.create({ ...params })
  }
}