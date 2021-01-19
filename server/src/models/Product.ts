import { DataTypes, Model, Optional } from "sequelize";

import { sequelize } from '../db';

export interface IProduct {
  id: string;
  title: string;
  description: string;
  imageName: string;
  stock: number;
}

export interface IProductCreation extends Optional<IProduct, 'id'> {}

export class Product extends Model<IProduct, IProductCreation> implements IProduct {
  public id!: string;
  public title!: string;
  public description!: string;
  public imageName!: string;
  public stock!: number;
}

Product.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    unique: true
  },
  title: {
    type: DataTypes.STRING(255)
  },
  description: {
    type: DataTypes.STRING(255)
  },
  imageName: {
    type: DataTypes.STRING(255)
  },
  stock: {
    type: DataTypes.INTEGER
  }
}, {
  tableName: 'products',
  sequelize
});
