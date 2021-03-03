import dotenv from "dotenv";
import mysql, { Connection, Pool } from "mysql2";

dotenv.config();

const commonConfig = {
  host: `${process.env.DB_HOST}`,
  user: `${process.env.DB_USER}`,
  password: `${process.env.DB_PASSWORD}`
};

const connection = mysql.createConnection(commonConfig)

const pool = mysql.createPool({
  ...commonConfig,
  database: `${process.env.DB_NAME}`,
  waitForConnections: true,
  connectionLimit: 5,
  queueLimit: 0
});

export const promisePool = pool.promise();

const verifyDatabaseExists = async (pool: Pool) => {
  try {
    await pool.promise().query("SELECT 1");
  } catch (err) {
    throw new Error (`There was an issue verifying the database:\n${err}`);
  }
}

const initialiseDatabase = async (connection: Connection, databaseName: string) => {
  try {
    await connection.promise().execute(`CREATE DATABASE IF NOT EXISTS ${databaseName}`);
    console.log(`Verification for database [${databaseName}] completed`);
  } catch (err) {
    throw new Error (`There was an issue creating the database [${databaseName}]:\n${err}`);
  }
};

export const getDatabasePool = async () => {
  await initialiseDatabase(connection, process.env.DB_NAME || "thaum_test");
  await verifyDatabaseExists(pool);
}