
import DB from "../utils/DB/DB";

import { Request, Response } from "express";

import { IParsedOAuth2TokenResult, TwitterApi } from "twitter-api-v2";

import dotenv from 'dotenv';

dotenv.config();

const TwitterCallback = async (req: Request, res: Response) => {
    try {
        const { state, code }: any = req.query;
        
        // Get the saved codeVerifier from database  
        const userAuth = await DB.queries.QuerySelect("twitter_auth", { state });

        const codeVerifier = userAuth[0].code_verifier;

        if (!codeVerifier || !state || !code) {
            return res.status(400).send('You denied the app or your session expired!');
        }

        if (state !== state) {
            return res.status(400).send('Stored  tokens didnt  match!');
        }

        // Obtain access token 
        const client = new TwitterApi({ clientId: process.env.OAUTH2_CLIENT_ID as string, clientSecret: process.env.OAUTH2_CLIENT_SECRET as string });

        // Connect on behalf of the user
        const { client: loggedClient, accessToken, refreshToken, expiresIn }: IParsedOAuth2TokenResult = await client.loginWithOAuth2({ code, codeVerifier, redirectUri: process.env.TWITTER_CALLBACK_URI as string });

        // Get the user's Twitter data
        const { data: userObject } = await loggedClient.v2.me();
        
        // tweet the score
        const tweet = await loggedClient.v2.tweet(`I scored ${userAuth[0].score} on the frenfind game Are you more Degen than me? Come join the fun at https://anamulweb.com/games/spotb/spot.html`);

        if (!tweet.data) {
            return res.status(400).send('Tweet failed!');
        }
       
        await DB.queries.QueryUpdate("twitter_auth", { access_token: accessToken, refresh_token: refreshToken, user_twitter_id: userObject.id, code }, { state });

            console.log("userObject",userObject)
        await DB.queries.QueryInsert("users", { twitter_id: userObject.id, username: userObject.username, score: userAuth[0].score, name: userObject.name, time_played: userAuth[0].time_played, total_right: userAuth[0].total_right });
    
        const pathname = "http://localhost:5000"
        const data = {
            username: userObject.username,
            name: userObject.name,
            twitter_id: userObject.id,
        }
        const urlSearchParams = new URLSearchParams(Object.entries(data));
        return res.redirect(`${pathname}?${urlSearchParams.toString()}`);

    } catch (err: any) {
        console.log(err);
        return res.status(400).send('Something went wrong!' + err);
    }
}

export default TwitterCallback;