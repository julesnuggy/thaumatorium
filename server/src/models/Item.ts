import { IBaseProduct } from './BaseProduct';
import {
  ItemType,
  ProductType, 
} from '../enums/products';

export interface ItemRequest extends IBaseProduct {
  itemType: ItemType;
}

export interface ItemResponse extends IBaseProduct {
  id: string;
  itemType: ItemType;
}

export class Item implements IBaseProduct {
  public id!: string;
  public title!: string;
  public description!: string;
  public type!: ProductType;
  public itemType!: ItemType;
  public imageName!: string;
  public stock!: number;
}
