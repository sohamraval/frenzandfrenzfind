
import { Request, Response } from 'express';
import DB from '../utils/DB/DB';


const LeaderborardByScore = async (req: Request, res: Response) => {
    try {

        const results = await DB.queries.QueryCustom("SELECT * FROM users ORDER BY score DESC");

        return res.json({ status: "success", data: results });

    } catch (err: any) {
        console.log(err);
        return res.json({ status: "error", error: err });
    }
}

export default LeaderborardByScore;