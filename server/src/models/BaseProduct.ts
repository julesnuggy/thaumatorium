import { ProductType } from "../enums/productType";

export interface IBaseProduct {
  title: string;
  description: string;
  imageName: string;
  stock: number;
  type: ProductType;
}