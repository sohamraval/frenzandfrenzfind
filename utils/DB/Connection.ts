import mysql from "mysql";
import { Pool } from "mysql";
import dotenv from "dotenv";
dotenv.config();

const hostName = process.env.DB_HOST;
const userName = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const database = process.env.DB_NAME;

const connection: Pool = mysql.createPool({
  host: hostName,
  user: userName,
  password: password,
  database: database,
  connectionLimit: 10,
})


export default connection;
