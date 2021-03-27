export interface IItem {
  title: string;
  description: string;
  type: string;
  imageName: string;
  stock: number;
}

export interface ItemRequest extends IItem {}

export interface ItemResponse extends IItem {
  id: string;
}

export class Item implements IItem {
  public id!: string;
  public title!: string;
  public description!: string;
  public type!: string;
  public imageName!: string;
  public stock!: number;
}
