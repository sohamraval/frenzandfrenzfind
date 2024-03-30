const router = require("express").Router();

import LeaderborardByScore from "../controllers/LeaderborardByScore";

router.get("/get-leaderboard", LeaderborardByScore);

export default router;