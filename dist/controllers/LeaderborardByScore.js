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
const DB_1 = __importDefault(require("../utils/DB/DB"));
const LeaderborardByScore = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const results = yield DB_1.default.queries.QueryCustom("SELECT * FROM users ORDER BY score DESC");
        return res.json({ status: "success", data: results });
    }
    catch (err) {
        console.log(err);
        return res.json({ status: "error", error: err });
    }
});
exports.default = LeaderborardByScore;
//# sourceMappingURL=LeaderborardByScore.js.map