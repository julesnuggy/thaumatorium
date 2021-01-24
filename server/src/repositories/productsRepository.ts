import { IProduct, Product } from "../models/Product";

export class ProductsRepository {
  public getProducts = async ():Promise<IProduct[]> => {
    return Product.findAll();
  }

  public createProduct = async (params: Product): Promise<IProduct> => {
    return Product.create({ ...params })
  }
}
