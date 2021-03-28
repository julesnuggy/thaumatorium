import { ProductType } from '../enums/products';

export interface IBaseProduct {
  title: string;
  description: string;
  imageName: string;
  stock: number;
  type: ProductType;
}