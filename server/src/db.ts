import dotenv from "dotenv";
import { Sequelize } from 'sequelize';
import { Product } from './models/Product';
import { User } from './models/User';

dotenv.config();

const syncTables = async () => {
  await Product.sync();
  await User.sync();
}

export const sequelize = new Sequelize(
  `${process.env.DB_NAME}`,
  `${process.env.DB_USER}`,
  `${process.env.DB_PASSWORD}`,
  {
    host: `${process.env.DB_HOST}`,
    dialect: 'mysql'
});

export const initialiseDatabase = async () => {
  await sequelize.authenticate();
  await syncTables();
}