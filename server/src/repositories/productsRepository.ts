import { ProductRequest, ProductResponse } from '../models/Product';
import { promisePool } from '../db'

export class ProductsRepository {
  public getProducts = async ():Promise<ProductResponse[]> => {
    const rows = await promisePool.query('SELECT * FROM products;')
      .then(([rows, fields]) => {
        console.log(rows, fields);
        return rows;
      })
      .catch(err => console.error(err));
    return rows as ProductResponse[];
  }

  public createProduct = async (params: ProductRequest): Promise<void> => {
    await promisePool.query(
      'INSERT INTO User (title, description, imageName, stock) VALUES (?, ?, ?, ?)',
      {...params}
    );
  }
}
