export interface IProduct {
  title: string;
  description: string;
  imageName: string;
  stock: number;
}

export interface ProductRequest extends IProduct {}

export interface ProductResponse extends IProduct {
  id: string;
}

export class Product implements IProduct {
  public id!: string;
  public title!: string;
  public description!: string;
  public imageName!: string;
  public stock!: number;
}
