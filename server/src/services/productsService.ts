import { Product } from '../models/product';
import { ProductsRepository } from "../repositories/productsRepository";

export type CreateProductParams = Pick<Product, 'title' | 'description' | 'imageName' | 'stock'>;

export class ProductsService {
  private service = new ProductsRepository();

  public createProduct = (params: CreateProductParams): Product | void => {
    return this.service.createProduct(params);
  }
}