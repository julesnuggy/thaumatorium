import { getProducts, createProduct } from './productService';
import { getUsers, getUserByUsername, createUser, authenticateUser } from './userService'

export const productApis = { getProducts, createProduct };
export const userApis = { getUsers, getUserByUsername, createUser, authenticateUser };