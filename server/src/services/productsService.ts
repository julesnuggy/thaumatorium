import { Product } from '../models/product';
import { v4 as uuidv4 } from 'uuid';

export type CreateProductParams = Pick<Product, 'title' | 'description' | 'imageName' | 'stock'>;

export class ProductsService {
  public createProduct = (params: CreateProductParams): Product => {
    return {
      id: uuidv4(),
      ...params
    }
  }
}