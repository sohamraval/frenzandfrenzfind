import { QueryInsert, QuerySelect, QuerySelectAll, QueryUpdate, QueryDelete, QueryCustom, QuerySelectLike } from "./Queries";
import close from "./Close";

// make sure all the connections are close after a successfull query

type DB = {
  queries: {
    QueryInsert: (table: string, params: any) => Promise<any>,
    QuerySelect: (table: string, params: any) => Promise<any>,
    QuerySelectAll: (table: string) => Promise<any>,
    QueryUpdate: (table: string, params: any, where: any) => Promise<any>,
    QueryDelete: (table: string, where: any) => Promise<any>,
    QueryCustom: (query: string) => Promise<any>,
    QuerySelectLike: (table: string, fields: any, data: any) => Promise<any>,
  },
  close: () => void
}

const DB: DB = {
  queries: {
    QueryInsert,
    QuerySelect,
    QuerySelectAll,
    QueryUpdate,
    QueryDelete,
    QueryCustom,
    QuerySelectLike,
  },
  close: close,
};

// close all connections

process.on("exit", () => {
  close();
});

export default DB;
