import { v4 as uuidv4 } from 'uuid';
import { sql } from '../db';
import { CreateProductParams } from "../services/productsService";
import { Product } from "../models/product";

export class ProductsRepository {
  public getProducts = async ():Promise<Product[]> => {
    console.log("in repository")
    const [rows]: [Product[]] = await sql.query('SELECT * FROM products');

    console.log("repo rows", rows)
    return rows;
  }

  public createProduct = (params: CreateProductParams): Product | void => {
    const id = uuidv4();
    sql.query('INSERT INTO products SET id = ?, ?', [id, params], (err: any, res: Product) => {
      if(err) {
        console.log("ERROR", err);
        return;
      }

      console.log("SUCCESS", res);
      return res;
    })
  }
}