import express from "express";

const app = express();

import path from "path";

import bodyParser from "body-parser";

import cookieParser from "cookie-parser";
import TwitterAuthRouter from "./routes/twitterAuthRoute";
import Leaderboard from "./routes/leaderboard.route";

import DB from "./utils/DB/Connection";

import cors from "cors";


// make the session persistent between endpoints 
app.use(cookieParser());
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// serve static files from the `public` folder


const PORT = process.env.PORT || 8000;

app.get("/api", (req: any, res: any) => {
  res.send("Hello World");
});

app.use("/api", TwitterAuthRouter);
app.use("/api", Leaderboard);

app.use(express.static(path.join(__dirname, "public")));

app.get("*", (req: any, res: any) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Frenfind app listening on port ${PORT}`);
});

// close the database connection when the app terminates
process.on("SIGINT", function () {
  DB.end(function (err: any) {
    if (err) throw err;
    console.log("Closed the database connection.");
  });
});

// close the database connection on uncaught exceptions and restart the app
process.on("uncaughtException", function () {
  DB.end(function (err: any) {
    if (err) throw err;
    console.log("Closed the database connection.");
  });
  process.exit(1);
});
