"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Queries_1 = require("./Queries");
const Close_1 = __importDefault(require("./Close"));
const DB = {
    queries: {
        QueryInsert: Queries_1.QueryInsert,
        QuerySelect: Queries_1.QuerySelect,
        QuerySelectAll: Queries_1.QuerySelectAll,
        QueryUpdate: Queries_1.QueryUpdate,
        QueryDelete: Queries_1.QueryDelete,
        QueryCustom: Queries_1.QueryCustom,
        QuerySelectLike: Queries_1.QuerySelectLike,
    },
    close: Close_1.default,
};
// close all connections
process.on("exit", () => {
    (0, Close_1.default)();
});
exports.default = DB;
//# sourceMappingURL=DB.js.map