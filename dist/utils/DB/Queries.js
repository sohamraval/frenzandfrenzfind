"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuerySelectLike = exports.QueryCustom = exports.QueryDelete = exports.QueryUpdate = exports.QuerySelectAll = exports.QuerySelect = exports.QueryInsert = void 0;
const mysql_1 = __importDefault(require("mysql"));
const Connection_1 = __importDefault(require("./Connection"));
const Execute = (sql) => {
    try {
        return new Promise((resolve, reject) => {
            Connection_1.default.getConnection((err, con) => {
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
    }
    catch (e) {
        console.log(`=> QueryError: | ${sql} | \n`, e.message);
        return null;
    }
};
const QueryInsert = (tableName, params) => __awaiter(void 0, void 0, void 0, function* () {
    const query = `INSERT INTO ?? SET ? ON DUPLICATE KEY UPDATE ?`;
    const inserts = [tableName, params, params];
    const sql = mysql_1.default.format(query, inserts);
    const result = yield Execute(sql);
    return result;
});
exports.QueryInsert = QueryInsert;
// select query that takes tableName and param
const QuerySelect = (tableName, params) => __awaiter(void 0, void 0, void 0, function* () {
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
    const sql = mysql_1.default.format(query, inserts);
    const result = yield Execute(sql);
    return result;
});
exports.QuerySelect = QuerySelect;
// select like query that searches for a string in a table
const QuerySelectLike = (tableName, fields, string) => __awaiter(void 0, void 0, void 0, function* () {
    const query = `SELECT * FROM ?? WHERE ?? LIKE ?`;
    // append all fields array item to the query, and make everything case insensitive
    fields = fields.map((field) => {
        return mysql_1.default.raw(`LOWER(${field})`);
    });
    string = `%${string.toLowerCase()}%`;
    const inserts = [tableName, fields, string];
    const sql = mysql_1.default.format(query, inserts);
    const result = yield Execute(sql);
    return result;
});
exports.QuerySelectLike = QuerySelectLike;
// select All query with no condition
const QuerySelectAll = (tableName) => __awaiter(void 0, void 0, void 0, function* () {
    const query = `SELECT * FROM ??`;
    const inserts = [tableName];
    const sql = mysql_1.default.format(query, inserts);
    const result = yield Execute(sql);
    return result;
});
exports.QuerySelectAll = QuerySelectAll;
// update query that takes tableName, values and param
const QueryUpdate = (tableName, values, param) => __awaiter(void 0, void 0, void 0, function* () {
    const query = `UPDATE ?? SET ? WHERE ?`;
    const inserts = [tableName, values, param];
    const sql = mysql_1.default.format(query, inserts);
    const result = yield Execute(sql);
    return result;
});
exports.QueryUpdate = QueryUpdate;
// delete query that takes tableName and param
const QueryDelete = (tableName, param) => __awaiter(void 0, void 0, void 0, function* () {
    const query = `DELETE FROM ?? WHERE ?`;
    const inserts = [tableName, param];
    const sql = mysql_1.default.format(query, inserts);
    const result = yield Execute(sql);
    return result;
});
exports.QueryDelete = QueryDelete;
// custom query
const QueryCustom = (query) => __awaiter(void 0, void 0, void 0, function* () {
    // const sql = mysql.escape(query);
    const result = yield Execute(query);
    return result;
});
exports.QueryCustom = QueryCustom;
//# sourceMappingURL=Queries.js.map