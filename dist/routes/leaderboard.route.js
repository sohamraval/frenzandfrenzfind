"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const router = require("express").Router();
const LeaderborardByScore_1 = __importDefault(require("../controllers/LeaderborardByScore"));
router.get("/get-leaderboard", LeaderborardByScore_1.default);
exports.default = router;
//# sourceMappingURL=leaderboard.route.js.map