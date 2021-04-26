import dotenv from 'dotenv';
import mysql, {
  Connection,
  Pool, 
} from 'mysql2';

dotenv.config();

const commonConfig = {
  host: `${process.env.DB_HOST}`,
  user: `${process.env.DB_USER}`,
  password: `${process.env.DB_PASSWORD}`,
};

const connection = mysql.createConnection(commonConfig);

const pool = mysql.createPool({
  ...commonConfig,
  database: `${process.env.DB_NAME}`,
  waitForConnections: true,
  connectionLimit: 5,
  queueLimit: 0,
});

export const promisePool = pool.promise();

const verifyDatabaseExists = async (pool: Pool): Promise<void> => {
  try {
    await pool.promise().query('SELECT 1');
  } catch (err) {
    throw new Error(`There was an issue verifying the database:\n${err}`);
  }
};

const initialiseDatabase = async (connection: Connection, databaseName: string): Promise<void> => {
  try {
    await connection.promise().execute(`CREATE DATABASE IF NOT EXISTS ${databaseName}`);
    console.log(`Verification for database [${databaseName}] completed`);
  } catch (err) {
    throw new Error(`There was an issue creating the database [${databaseName}]:\n${err}`);
  }
};

const createItemsTable = `
  CREATE TABLE IF NOT EXISTS items
  (
    id          INT          not null auto_increment,
    title       VARCHAR(255) not null,
    description VARCHAR(255),
    imageName   VARCHAR(255),
    stock       INT,
    type        VARCHAR(255),
    itemType    VARCHAR(255),
    PRIMARY KEY (id)
  );
`;

const createEquipmentTable = `
  CREATE TABLE IF NOT EXISTS equipment
  (
    id              VARCHAR(36) not null unique,
    title           VARCHAR(255) not null,
    description     VARCHAR(255),
    imageName       VARCHAR(255),
    stock           INT,
    type            VARCHAR(255),
    equipmentType   VARCHAR(255),
    PRIMARY KEY (id)
  );
`;

const createEquipmentStatsTable = `
  CREATE TABLE IF NOT EXISTS equipmentStats
  (
    id          VARCHAR(36) not null unique,
    equipmentId VARCHAR(36) not null unique,
    magAtk      INT,
    magDef      INT,
    magAcc      INT,
    magEva      INT,
    physAtk     INT,
    physDef     INT,
    physAcc     INT,
    physEva     INT,
    speed       INT,
    PRIMARY KEY (id),
    FOREIGN KEY (equipmentId) REFERENCES equipment(id)
  );
`;

const createMagicTable = `
  CREATE TABLE IF NOT EXISTS magic
  (
    id          INT          not null auto_increment,
    title       VARCHAR(255) not null,
    description VARCHAR(255),
    imageName   VARCHAR(255),
    stock       INT,
    type        VARCHAR(255),
    magicType   VARCHAR(255),
    PRIMARY KEY (id)
  );
`;

const createUsersTable = `
  CREATE TABLE IF NOT EXISTS users
  (
    id       VARCHAR(36)  not null unique,
    username VARCHAR(255) not null,
    password VARCHAR(255),
    PRIMARY KEY (id)
  );
`;

const createSessionTable = `
  CREATE TABLE IF NOT EXISTS session
  (
      id     VARCHAR(36) not null unique,
      userId VARCHAR(36) not null unique,
      PRIMARY KEY (id),
      FOREIGN KEY (userId) REFERENCES users(id)
  );
`;

const initialiseTables = async (): Promise<void> => {
  try {
    await promisePool.execute(createItemsTable).catch(err => console.log(err));
    await promisePool.execute(createEquipmentTable).catch(err => console.log(err));
    await promisePool.execute(createEquipmentStatsTable).catch(err => console.log(err));
    await promisePool.execute(createUsersTable).catch(err => console.log(err));
    await promisePool.execute(createSessionTable).catch(err => console.log(err));
    await promisePool.execute(createMagicTable).catch(err => console.log(err));
    console.log('Validated database tables.');
  } catch (err) {
    throw new Error(`There was an issue validating the DB tables:\n${err}`);
  }
};

export const getDatabasePool = async (): Promise<void> => {
  await initialiseDatabase(connection, process.env.DB_NAME || 'thaum_test');
  await initialiseTables();
  await verifyDatabaseExists(pool);
};