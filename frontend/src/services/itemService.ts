import { client } from './axiosClient';
import {
  Item,
  ItemResponse, 
} from '../models/Item';

export const itemsUrl = '/items';

export const getItems = async (): Promise<ItemResponse[]> => client.get(itemsUrl).then(res => res.data);

export const createItem = async (item: Item): Promise<void> =>
  client.post(itemsUrl, item).then(res => res.data);

export const deleteItem = async (params: any): Promise<void> =>
  client.delete(itemsUrl, params.itemId).then(res => res.data);