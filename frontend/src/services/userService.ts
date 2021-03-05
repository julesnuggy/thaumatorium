import { client } from './axiosClient';
import { User } from '../models/User';

export const usersUrl = '/users';

export const createUser = async (user: User): Promise<User> =>
  client.post(usersUrl, user).then(res => res.data);
