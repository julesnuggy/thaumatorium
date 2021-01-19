import { Product } from '../models/product';
import { ProductsRepository } from "../repositories/productsRepository";

export type CreateProductParams = Pick<Product, 'title' | 'description' | 'imageName' | 'stock'>;

export class ProductsService {
  private repository = new ProductsRepository();

  public getProducts = async (): Promise<Product[]>=> {
    console.log("in service")
    return this.repository.getProducts();
  }

  public createProduct = (params: CreateProductParams): Product | void => {
    return this.repository.createProduct(params);
  }
}