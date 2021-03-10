import { client } from './axiosClient';
import { User } from '../models/User';

export const usersUrl = '/users';

export const createUser = async (user: User): Promise<User> =>
  client.post(usersUrl, user).then(res => res.data);

export const getUsers = async (): Promise<User[]> =>
  client.get(usersUrl).then(res => res.data);

export const getUserByUsername = async (username: string): Promise<User> =>
  client.get(`${usersUrl}/${username}`).then(res => res.data);
