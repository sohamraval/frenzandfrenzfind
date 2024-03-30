import mysql from "mysql";

import connection from "./Connection";

const Execute = (sql: string | mysql.QueryOptions) => {
  try {
    return new Promise((resolve, reject) => {
      connection.getConnection((err, con) => {
        if (err) { 
          return reject(err);
        }
        con.query(sql, (err, results) => {
          if (err) {
            return reject(err);
          }
          resolve(results);

        });

        con.release();
      });
    });
  } catch (e: any) {
    console.log(`=> QueryError: | ${sql} | \n`, e.message);
    return null;
  }
};

// insert query that takes tableName and values both escaping

type ParamsType = {
  [key: string]: any;
};

const QueryInsert = async (tableName: string, params: ParamsType) => {
  const query = `INSERT INTO ?? SET ? ON DUPLICATE KEY UPDATE ?`;
  const inserts = [tableName, params, params];
  const sql = mysql.format(query, inserts);
  const result = await Execute(sql);
  return result;
};

// select query that takes tableName and param
const QuerySelect = async (tableName: string, params: ParamsType) => {
  // if param has more than pair add an AND block for each pair
  let query = `SELECT * FROM ?? WHERE ?`;
  if (Object.keys(params).length > 1) {
    let andBlock = [];
    for (let key in params) {
      andBlock.push(`${key} = '${params[key]}'`);
    }
    query = `SELECT * FROM ?? WHERE ${andBlock.join(" AND ")}`;
  }

  const inserts = [tableName, params];
  const sql = mysql.format(query, inserts);
  const result = await Execute(sql);
  return result;
};

// select like query that searches for a string in a table
const QuerySelectLike = async (tableName: string, fields: any[], string: string) => {
  const query = `SELECT * FROM ?? WHERE ?? LIKE ?`;
  // append all fields array item to the query, and make everything case insensitive
  fields = fields.map((field: any) => {
    return mysql.raw(`LOWER(${field})`);
  });
  string = `%${string.toLowerCase()}%`;
  const inserts = [tableName, fields, string];
  const sql = mysql.format(query, inserts);
  const result = await Execute(sql);
  return result;
};

// select All query with no condition
const QuerySelectAll = async (tableName: string) => {
  const query = `SELECT * FROM ??`;
  const inserts = [tableName];
  const sql = mysql.format(query, inserts);
  const result = await Execute(sql);
  return result;
};

// update query that takes tableName, values and param
const QueryUpdate = async (tableName: string, values: any, param: ParamsType) => {
  const query = `UPDATE ?? SET ? WHERE ?`;
  const inserts = [tableName, values, param];
  const sql = mysql.format(query, inserts);
  const result = await Execute(sql);
  return result;
};

// delete query that takes tableName and param
const QueryDelete = async (tableName: any, param: ParamsType) => {
  const query = `DELETE FROM ?? WHERE ?`;
  const inserts = [tableName, param];
  const sql = mysql.format(query, inserts);
  const result = await Execute(sql);
  return result;
};

// custom query
const QueryCustom = async (query: string | mysql.QueryOptions) => {
  // const sql = mysql.escape(query);
  const result = await Execute(query);
  return result;
};


export { QueryInsert, QuerySelect, QuerySelectAll, QueryUpdate, QueryDelete, QueryCustom, QuerySelectLike };
