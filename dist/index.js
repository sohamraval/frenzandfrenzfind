"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const path_1 = __importDefault(require("path"));
const body_parser_1 = __importDefault(require("body-parser"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const twitterAuthRoute_1 = __importDefault(require("./routes/twitterAuthRoute"));
const leaderboard_route_1 = __importDefault(require("./routes/leaderboard.route"));
const Connection_1 = __importDefault(require("./utils/DB/Connection"));
const cors_1 = __importDefault(require("cors"));
// make the session persistent between endpoints 
app.use((0, cookie_parser_1.default)());
app.use((0, cors_1.default)());
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
// serve static files from the `public` folder
const PORT = process.env.PORT || 8000;
app.get("/api", (req, res) => {
    res.send("Hello World");
});
app.use("/api", twitterAuthRoute_1.default);
app.use("/api", leaderboard_route_1.default);
app.use(express_1.default.static(path_1.default.join(__dirname, "public")));
app.get("*", (req, res) => {
    res.sendFile(path_1.default.join(__dirname, "public", "index.html"));
});
app.listen(PORT, () => {
    console.log(`Frenfind app listening on port ${PORT}`);
});
// close the database connection when the app terminates
process.on("SIGINT", function () {
    Connection_1.default.end(function (err) {
        if (err)
            throw err;
        console.log("Closed the database connection.");
    });
});
// close the database connection on uncaught exceptions and restart the app
process.on("uncaughtException", function () {
    Connection_1.default.end(function (err) {
        if (err)
            throw err;
        console.log("Closed the database connection.");
    });
    process.exit(1);
});
//# sourceMappingURL=index.js.map