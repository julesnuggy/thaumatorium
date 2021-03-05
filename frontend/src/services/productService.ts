import { client } from './axiosClient';
import { Product, ProductResponse } from '../models/Product';

export const productsUrl = '/products';

export const getProducts = async (): Promise<ProductResponse[]> => client.get(productsUrl).then(res => res.data);

export const createProduct = async (product: Product): Promise<Product> =>
  client.post(productsUrl, product).then(res => res.data);
