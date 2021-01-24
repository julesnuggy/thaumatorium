import { DataTypes, Model, Optional } from "sequelize";

import { sequelize } from '../db';

export interface IUser {
  id: string;
  username: string;
  password: string;
}

export interface IUserCreation extends Optional<IUser, 'id'> {}

export class User extends Model<IUser, IUserCreation> implements IUser {
  public id!: string;
  public username!: string;
  public password!: string;
}

User.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      unique: true
    },
    username: {
      type: DataTypes.STRING(50)
    },
    password: {
      type: DataTypes.STRING(36)
    }
  },
  {
    tableName: 'users',
    sequelize
});
