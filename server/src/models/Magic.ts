import { IBaseProduct } from './BaseProduct';
import { MagicType, ProductType } from '../enums/products';

export interface MagicRequest extends IBaseProduct {
  id?: string;
  magicType: MagicType;
}

export interface MagicResponse extends IBaseProduct {
  id: string;
  magicType: MagicType;
}

export class Magic implements IBaseProduct {
  public id!: string;
  public title!: string;
  public description!: string;
  public type!: ProductType;
  public magicType!: MagicType;
  public imageName!: string;
  public stock!: number;
}
