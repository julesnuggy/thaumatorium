import { client } from './axiosClient';
import {
  User,
  UserAuthenticatedResponse,
  UserLoginFormValues, 
} from '../models/User';

export const usersUrl = '/users';

export const createUser = async (user: User): Promise<User> =>
  client.post(usersUrl, user).then(res => res.data);

export const getUsers = async (): Promise<User[]> =>
  client.get(usersUrl).then(res => res.data);

export const getUserByUsername = async (username: string): Promise<User> =>
  client.get(`${usersUrl}/${username}`).then(res => res.data);

const axiosConfig = {
  withCredentials: true,
  origin: 'http://localhost:3000',
}
export const authenticateUser = async (userLogin: UserLoginFormValues): Promise<UserAuthenticatedResponse> =>
  client.post(`${usersUrl}/authenticate`, userLogin, axiosConfig).then(res => res.data);

export const verifySession = async (): Promise<User> =>
  client.get(`${usersUrl}/verify-session`, axiosConfig).then(res => res.data);

export const logout = async (): Promise<void> =>
  client.delete(usersUrl, axiosConfig).then(res => res.data);