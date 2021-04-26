import {
  ItemRequest,
  ItemResponse, 
} from '../models/Item';
import { ItemsRepository } from '../repositories/itemsRepository';

export class ItemsService {
  private repository = new ItemsRepository();

  public getItems = async (): Promise<ItemResponse[]> => {
    return this.repository.getItems();
  }

  public createItem = (params: ItemRequest): Promise<void> => {
    return this.repository.createItem(params);
  }
}
