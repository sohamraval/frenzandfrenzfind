import { Request, Response } from 'express';
import { TwitterApi } from 'twitter-api-v2';
import DB from '../utils/DB/DB';

import dotenv from 'dotenv';
dotenv.config();

const TwitterAuthURL = async (req: Request, res: Response) => {
    try {
        const twitterClient = new TwitterApi({
            clientId: process.env.OAUTH2_CLIENT_ID as string,
            // clientSecret: process.env.OAUTH2_CLIENT_SECRET as string, 
        });
        const { score, time_played, total_right } = req.body;
        const { url, codeVerifier, state } = twitterClient.generateOAuth2AuthLink(process.env.TWITTER_CALLBACK_URI as string, {
            scope: ['tweet.read', "tweet.write", 'users.read', 'offline.access'
            ]
        });
        await DB.queries.QueryInsert("twitter_auth", { code_verifier: codeVerifier, state, auth_url: url, score, time_played, total_right });
        return res.json({ url });

    } catch (err: any) {
        console.log(err);
        return res.status(500).send("Server error");
    }
}

export default TwitterAuthURL;
