"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Connection_1 = __importDefault(require("./Connection"));
// close any open connections
const Close = () => {
    Connection_1.default.end((err) => {
        if (err) {
            return console.log(err.message);
        }
        console.log("Close the database connection.");
    });
};
exports.default = Close;
//# sourceMappingURL=Close.js.map