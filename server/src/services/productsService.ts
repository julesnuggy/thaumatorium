import { IProduct, Product } from '../models/Product';
import { ProductsRepository } from "../repositories/productsRepository";

export class ProductsService {
  private repository = new ProductsRepository();

  public getProducts = async (): Promise<IProduct[]>=> {
    return this.repository.getProducts();
  }

  public createProduct = (params: Product): Promise<IProduct> => {
    return this.repository.createProduct(params);
  }
}
