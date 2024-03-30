const router = require("express").Router();
import { dot } from "node:test/reporters";
import LeaderborardByScore from "../controllers/LeaderborardByScore";
import TwitterAuthURL from "../controllers/TwitterAuthURL";
import TwitterCallback from "../controllers/TwitterCallback";

require("dotenv").config();

router.post("/twitter-auth-url", TwitterAuthURL);

router.get("/twitter-callback", TwitterCallback);

export default router;
