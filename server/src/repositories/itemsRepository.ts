import {
  ItemRequest,
  ItemResponse, 
} from '../models/Item';
import { promisePool } from '../db'

export class ItemsRepository {
  public getItems = async ():Promise<ItemResponse[]> => {
    const [rows] = await promisePool.query('SELECT * FROM items;')
    return rows as ItemResponse[];
  }

  public createItem = async (params: ItemRequest): Promise<void> => {
    const {
      title,
      description,
      type,
      itemType,
      imageName,
      stock,
    } = params;
    await promisePool.query(
      'INSERT INTO items (title, description, type, itemType, imageName, stock) VALUES (?, ?, ?, ?, ?, ?)',
      [
        title,
        description,
        type,
        itemType,
        imageName,
        stock, 
      ])
      .then(() => console.log('Added new item to database!'))
      .catch(err => console.error(err));
  }

  public deleteItem = async (itemId: string): Promise<void> => {
    await promisePool.query('DELETE FROM items WHERE id = ?;', [itemId])
      .then(() => console.log(`Successfully deleted item with ID ${itemId}`))
      .catch(err => console.error(`Failed to delete item with ID ${itemId}`, err));
  }
}
