import { ItemRequest, ItemResponse } from '../models/Item';
import { promisePool } from '../db'

export class ItemsRepository {
  public getItems = async ():Promise<ItemResponse[]> => {
    const [rows] = await promisePool.query('SELECT * FROM items;')
    return rows as ItemResponse[];
  }

  public createItem = async (params: ItemRequest): Promise<void> => {
    const { title, description, type, itemType, imageName, stock } = params;
    await promisePool.query(
      'INSERT INTO items (title, description, type, itemType, imageName, stock) VALUES (?, ?, ?, ?, ?, ?)',
      [title, description, type, itemType, imageName, stock])
      .then(([rows]:  any) => console.log(`Created new item with ID: ${rows.insertId}`))
      .catch(err => console.error(err));
  }
}
