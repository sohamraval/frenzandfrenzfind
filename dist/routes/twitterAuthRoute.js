"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const router = require("express").Router();
const TwitterAuthURL_1 = __importDefault(require("../controllers/TwitterAuthURL"));
const TwitterCallback_1 = __importDefault(require("../controllers/TwitterCallback"));
require("dotenv").config();
router.post("/twitter-auth-url", TwitterAuthURL_1.default);
router.get("/twitter-callback", TwitterCallback_1.default);
exports.default = router;
//# sourceMappingURL=twitterAuthRoute.js.map