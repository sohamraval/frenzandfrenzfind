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
const twitter_api_v2_1 = require("twitter-api-v2");
const DB_1 = __importDefault(require("../utils/DB/DB"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const TwitterAuthURL = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const twitterClient = new twitter_api_v2_1.TwitterApi({
            clientId: process.env.OAUTH2_CLIENT_ID,
            // clientSecret: process.env.OAUTH2_CLIENT_SECRET as string, 
        });
        const { score, time_played, total_right } = req.body;
        const { url, codeVerifier, state } = twitterClient.generateOAuth2AuthLink(process.env.TWITTER_CALLBACK_URI, {
            scope: ['tweet.read', "tweet.write", 'users.read', 'offline.access'
            ]
        });
        yield DB_1.default.queries.QueryInsert("twitter_auth", { code_verifier: codeVerifier, state, auth_url: url, score, time_played, total_right });
        return res.json({ url });
    }
    catch (err) {
        console.log(err);
        return res.status(500).send("Server error");
    }
});
exports.default = TwitterAuthURL;
//# sourceMappingURL=TwitterAuthURL.js.map