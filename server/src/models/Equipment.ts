import { IBaseProduct } from './BaseProduct';
import { ProductType } from '../enums/productType';

export interface EquipmentRequest extends IBaseProduct {
  id?: string;
}

export interface EquipmentResponse extends IBaseProduct {
  id: string;
}

export class Equipment implements IBaseProduct {
  public id!: string;
  public title!: string;
  public description!: string;
  public type!: ProductType;
  public imageName!: string;
  public stock!: number;
}
