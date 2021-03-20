import { ProductRequest, ProductResponse } from '../models/Product';
import { ProductsRepository } from "../repositories/productsRepository";

export class ProductsService {
  private repository = new ProductsRepository();

  public getProducts = async (): Promise<ProductResponse[]>=> {
    return this.repository.getProducts();
  }

  public createProduct = (params: ProductRequest): Promise<void> => {
    return this.repository.createProduct(params);
  }
}
