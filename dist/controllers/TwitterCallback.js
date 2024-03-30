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
const twitter_api_v2_1 = require("twitter-api-v2");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const TwitterCallback = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { state, code } = req.query;
        // Get the saved codeVerifier from database  
        const userAuth = yield DB_1.default.queries.QuerySelect("twitter_auth", { state });
        const codeVerifier = userAuth[0].code_verifier;
        if (!codeVerifier || !state || !code) {
            return res.status(400).send('You denied the app or your session expired!');
        }
        if (state !== state) {
            return res.status(400).send('Stored  tokens didnt  match!');
        }
        // Obtain access token 
        const client = new twitter_api_v2_1.TwitterApi({ clientId: process.env.OAUTH2_CLIENT_ID, clientSecret: process.env.OAUTH2_CLIENT_SECRET });
        // Connect on behalf of the user
        const { client: loggedClient, accessToken, refreshToken, expiresIn } = yield client.loginWithOAuth2({ code, codeVerifier, redirectUri: process.env.TWITTER_CALLBACK_URI });
        // Get the user's Twitter data
        const { data: userObject } = yield loggedClient.v2.me();
        // tweet the score
        const tweet = yield loggedClient.v2.tweet(`I scored ${userAuth[0].score} on the frenfind game Are you more Degen than me? Come join the fun at https://anamulweb.com/games/spotb/spot.html`);
        if (!tweet.data) {
            return res.status(400).send('Tweet failed!');
        }
        yield DB_1.default.queries.QueryUpdate("twitter_auth", { access_token: accessToken, refresh_token: refreshToken, user_twitter_id: userObject.id, code }, { state });
        console.log("userObject", userObject);
        yield DB_1.default.queries.QueryInsert("users", { twitter_id: userObject.id, username: userObject.username, score: userAuth[0].score, name: userObject.name, time_played: userAuth[0].time_played, total_right: userAuth[0].total_right });
        const pathname = "http://localhost:5000";
        const data = {
            username: userObject.username,
            name: userObject.name,
            twitter_id: userObject.id,
        };
        const urlSearchParams = new URLSearchParams(Object.entries(data));
        return res.redirect(`${pathname}?${urlSearchParams.toString()}`);
    }
    catch (err) {
        console.log(err);
        return res.status(400).send('Something went wrong!' + err);
    }
});
exports.default = TwitterCallback;
//# sourceMappingURL=TwitterCallback.js.map