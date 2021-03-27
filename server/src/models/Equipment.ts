import { IBaseProduct } from './BaseProduct';
import { EquipmentType, ProductType } from '../enums/products';

export interface EquipmentRequest extends IBaseProduct {
  id?: string;
  equipmentType: EquipmentType;
}

export interface EquipmentResponse extends IBaseProduct {
  id: string;
  equipmentType: EquipmentType;
}

export class Equipment implements IBaseProduct {
  public id!: string;
  public title!: string;
  public description!: string;
  public type!: ProductType;
  public equipmentType!: EquipmentType;
  public imageName!: string;
  public stock!: number;
}
