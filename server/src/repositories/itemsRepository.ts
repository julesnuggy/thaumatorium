import { ItemRequest, ItemResponse } from '../models/Item';
import { promisePool } from '../db'

export class ItemsRepository {
  public getItems = async ():Promise<ItemResponse[]> => {
    const [rows] = await promisePool.query('SELECT * FROM items;')
    return rows as ItemResponse[];
  }

  public createItem = async (params: ItemRequest): Promise<void> => {
    await promisePool.query(
      'INSERT INTO items (title, description, type, imageName, stock) VALUES (?, ?, ?, ?, ?)',
      [params.title, params.description, params.type, params.imageName, params.stock])
      .then(([rows]:  any) => console.log(`Created new item with ID: ${rows.insertId}`))
      .catch(err => console.error(err));
  }
}
