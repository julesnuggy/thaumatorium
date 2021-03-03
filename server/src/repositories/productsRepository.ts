import { ProductRequest, ProductResponse } from '../models/Product';
import { promisePool } from '../db'

export class ProductsRepository {
  public getProducts = async ():Promise<ProductResponse[]> => {
    const [rows] = await promisePool.query('SELECT * FROM products;')
    return rows as ProductResponse[];
  }

  public createProduct = async (params: ProductRequest): Promise<void> => {
    await promisePool.query(
      'INSERT INTO products (title, description, imageName, stock) VALUES (?, ?, ?, ?)',
      [params.title, params.description, params.imageName, params.stock])
      .then(([rows]:  any) => console.log(`Created new product with ID: ${rows.insertId}`))
      .catch(err => console.error(err));
  }
}
