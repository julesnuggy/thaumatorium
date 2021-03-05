import { getProducts, createProduct } from './productService';
import { createUser } from './userService'

export const productApis = { getProducts, createProduct };
export const userApis = { createUser };